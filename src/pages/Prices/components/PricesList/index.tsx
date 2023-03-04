import { PricesListProps } from './types';
import * as S from './styles';
import { PriceCard } from '../PriceCard';

export const PricesList: React.FC<PricesListProps> = ({ printPrices }) => {

  return (
    <S.Container>
      {printPrices.map(printPrice => (
        <PriceCard
          key={printPrice.id}
          printPrice={printPrice}
        />
      ))}
    </S.Container>
  );
};
