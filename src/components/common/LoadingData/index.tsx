import { Loading } from '../Loading';
import { Text } from '../Text';

import { LoadingDataProps } from './types';
import * as S from './styles';

export const LoadingData: React.FC<LoadingDataProps> = ({ dataName }) => {

  return (
    <S.Container>
      <Text>
        Carregando {dataName || 'dados'}...
      </Text>

      <Loading size={28} />
    </S.Container>
  );
};
