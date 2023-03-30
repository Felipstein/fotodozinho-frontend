import { Loading } from '../Loading';
import { Text } from '../Text';

import { LoadingDataProps } from './types';
import * as S from './styles';

export const LoadingData: React.FC<LoadingDataProps> = ({ dataName, ...props }) => {

  return (
    <S.Container {...props}>
      <Text>
        Carregando {dataName || 'dados'}...
      </Text>

      <Loading size={28} />
    </S.Container>
  );
};
