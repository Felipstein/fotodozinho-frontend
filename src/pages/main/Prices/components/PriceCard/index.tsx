import { formatCurrency } from '../../../../../utils/formatCurrency';
import { Text } from '../../../../../components/common/Text';

import { PriceCardProps } from './types';
import * as S from './styles';

export const PriceCard: React.FC<PriceCardProps> = ({ printPrice }) => {
  return (
    <S.Container>
      <div className="price-card-info top">
        <Text size='xsm'>Tamanho/tipo</Text>

        <h3>{printPrice.length}</h3>
      </div>

      <div className="price-card-info bottom">
        <Text size='xsm'>Preço</Text>

        <Text id='price' size='lg'>{formatCurrency(printPrice.price)}</Text>
      </div>
    </S.Container>
  );
};
