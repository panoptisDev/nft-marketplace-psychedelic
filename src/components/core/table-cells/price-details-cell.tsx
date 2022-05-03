import wicpIcon from '../../../assets/wicpIcon.png';
import {
  PriceDetails,
  WICPContainer,
  WICPText,
  WICPLogo,
  PriceText,
} from './styles';

export interface PriceDetailsCellProps {
  wicp: string;
  price?: string;
  tableType: any;
}

export const PriceDetailsCell = ({
  wicp,
  price,
  tableType,
}: PriceDetailsCellProps) => (
  <PriceDetails>
    <WICPContainer tableType={tableType}>
      <WICPText tableType={tableType}>{wicp}</WICPText>
      <WICPLogo src={wicpIcon} alt="wicp" />
    </WICPContainer>
    {price && <PriceText tableType={tableType}>{price}</PriceText>}
  </PriceDetails>
);
