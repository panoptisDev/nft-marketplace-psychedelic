import React, { useMemo, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { PlugButton } from './plug-button';
import {
  usePlugStore,
  plugActions,
  useAppDispatch,
} from '../../store';
import {
  isPlugInstalled,
  requestConnectToPlug,
  hasPlugAgent,
  createPlugAgent,
  checkIsConnected,
  getPrincipal,
  formatAddress,
} from '../../integrations/plug';
import {
  PLUG_WALLET_WEBSITE_URL,
  PlugStatusCodes,
} from '../../constants';
import config from '../../config/env';

const {
  crownsCanisterId,
  marketplaceCanisterId,
  wICPCanisterId,
  host,
} = config;

const whitelist = [
  crownsCanisterId,
  marketplaceCanisterId,
  wICPCanisterId,
];

export const Plug = () => {
  const { t } = useTranslation();
  // eslint-disable-next-line
  const { isConnected, connectionStatus, principalId } =
    usePlugStore();
  const dispatch = useAppDispatch();
  const hasPlug = isPlugInstalled();

  // eslint-disable-next-line
  const isVerifying = useMemo(() => {
    return connectionStatus === PlugStatusCodes.Verifying;
  }, [connectionStatus]);

  // eslint-disable-next-line
  const isConnecting = useMemo(() => {
    return connectionStatus === PlugStatusCodes.Connecting;
  }, [connectionStatus]);

  useEffect(() => {
    const verifyPlugConnection = async () => {
      if (!hasPlug) {
        // update connection status to not-installed
        dispatch(
          plugActions.setConnectionStatus(
            PlugStatusCodes.NotInstalled,
          ),
        );

        return;
      }

      const connected = await checkIsConnected();

      if (!connected) {
        // update connection status to installed
        dispatch(
          plugActions.setConnectionStatus(
            PlugStatusCodes.FailedToConnect,
          ),
        );

        return;
      }

      if (!hasPlugAgent()) {
        await createPlugAgent({
          whitelist,
          host,
        });
      }

      // update connection status to connected
      dispatch(plugActions.setIsConnected(connected));
    };

    verifyPlugConnection();
  }, [hasPlug, dispatch]);

  // update principal Id
  useEffect(() => {
    if (isConnected) {
      const getPrincipalId = async () => {
        const principal = await getPrincipal();

        if (principal) {
          if (typeof principal === 'string') {
            dispatch(
              plugActions.setPrincipalId(
                principal as unknown as string,
              ),
            );
          } else {
            dispatch(plugActions.setPrincipalId(principal.toText()));
          }
        }
      };

      getPrincipalId();
    }
  }, [isConnected, dispatch]);

  const handleConnectToPlug = async () => {
    try {
      // verifying plug connection
      dispatch(
        plugActions.setConnectionStatus(PlugStatusCodes.Connecting),
      );

      // request app to connect with plug
      const connected = await requestConnectToPlug({
        whitelist,
        host,
      });

      if (!connected) {
        throw Error('Oops! Failed to connect to plug.');
      }

      const agentCreated = await createPlugAgent({
        whitelist,
        host,
      });

      if (!agentCreated) {
        throw Error('Oops! Failed to create plug agent.');
      }

      // connected to plug
      dispatch(plugActions.setIsConnected(true));
    } catch (err) {
      // eslint-disable-next-line no-console
      console.error(err);
      // failed to connect plug
      dispatch(plugActions.setIsConnected(false));
    }
  };

  const handleClick = () => {
    // Is plug installed
    if (!hasPlug) {
      // Ask user to install plug
      window.open(PLUG_WALLET_WEBSITE_URL, '_blank');
      return;
    }

    // connect to plug if installed
    handleConnectToPlug();
  };

  return (
    <>
      {isVerifying && (
        <PlugButton
          handleClick={handleClick}
          text={t('translation:buttons.action.loading')}
        />
      )}
      {isConnecting && (
        <PlugButton
          handleClick={handleClick}
          text={t('translation:buttons.action.connecting')}
        />
      )}
      {!isVerifying && !isConnecting && !isConnected && (
        <PlugButton
          handleClick={handleClick}
          text={
            hasPlug
              ? t('translation:buttons.action.connectToPlug')
              : t('translation:buttons.action.installPlug')
          }
        />
      )}
      {!isVerifying && !isConnecting && isConnected && (
        <PlugButton
          handleClick={() => {
            // eslint-disable-next-line no-console
            console.log('Already connected to plug!');
          }}
          text={
            principalId
              ? formatAddress(principalId)
              : t('translation:buttons.action.loading')
          }
        />
      )}
    </>
  );
};
