import React from 'react';
import { useTranslation } from 'react-i18next';
import {
  useThemeStore,
} from '../../store';
import { LinkButton, Tooltip } from '../core';
import {
  NftMetadataWrapper,
  NftMetadataBackground,
  NftMetadataContent,
  NftMetadataContentWrapper,
  NftProfilePictureWrapper,
  Heading,
  Subtext,
  ButtonsWrapper,
  HeaderWrapper,
} from './styles';
import crown from '../../assets/crown-pfp.png';
import crownDark from '../../assets/crown-pfp-dark.png';
import verified from '../../assets/verified-large.svg';
import discord from '../../assets/buttons/discord.svg';
import discordDark from '../../assets/buttons/discord-dark.svg';
import twitter from '../../assets/buttons/twitter.svg';
import twitterDark from '../../assets/buttons/twitter-dark.svg';
import back from '../../assets/buttons/back.svg';
import backDark from '../../assets/buttons/back-dark.svg';

export const CollectionOverview = () => {
  const { t } = useTranslation();
  const { theme } = useThemeStore();
  const isLightTheme = theme === 'lightTheme';

  return (
    <NftMetadataWrapper>
      <NftMetadataBackground />
      <NftMetadataContent>
        <NftMetadataContentWrapper>
          <NftProfilePictureWrapper>
            <img
              src={isLightTheme ? crown : crownDark}
              alt="crown-pfp"
            />
          </NftProfilePictureWrapper>
          <HeaderWrapper>
            <Heading>
              Crowns
              <img src={verified} alt="verified" />
            </Heading>
            <Subtext>
              Crowns are a collection of 10,000 generated
              NFTs on the Internet Computer. With a mix of traditional
              and psychedelic materials.
            </Subtext>
          </HeaderWrapper>
        </NftMetadataContentWrapper>
        <ButtonsWrapper>
          <LinkButton type="textBtn" url="https://crowns.ooo/">
            {t('translation:buttons.links.website')}
          </LinkButton>
          <LinkButton url="https://discord.gg/yVEcEzmrgm">
            <img
              src={isLightTheme ? discord : discordDark}
              alt={t('translation:buttons.links.discord')}
            />
          </LinkButton>
          <LinkButton url="https://twitter.com/cap_ois">
            <img
              src={isLightTheme ? twitter : twitterDark}
              alt={t('translation:buttons.links.twitter')}
            />
          </LinkButton>

          <Tooltip text={t('translation:common.comingSoon')}>
            <LinkButton>
              <img
                src={isLightTheme ? back : backDark}
                alt={t('translation:buttons.links.back')}
              />
            </LinkButton>
          </Tooltip>
        </ButtonsWrapper>
      </NftMetadataContent>
    </NftMetadataWrapper>
  );
};
