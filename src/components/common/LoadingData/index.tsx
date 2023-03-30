import { Loading } from '../Loading';
import { Text } from '../Text';

import { LoadingDataProps } from './types';
import * as S from './styles';

export const LoadingData: React.FC<LoadingDataProps> = ({ data }) => {

  return (
    <S.Container>
      <Text>
        Carregando {data || 'dados'}...
      </Text>

      <Loading size={28} />
    </S.Container>
  );
};
