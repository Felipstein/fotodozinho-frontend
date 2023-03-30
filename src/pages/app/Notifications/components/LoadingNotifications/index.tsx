import { Loading } from '../../../../../components/common/Loading';
import { Text } from '../../../../../components/common/Text';

import * as S from './styles';

export const LoadingNotifications: React.FC = () => {

  return (
    <S.Container>
      <Text>
        Carregando notificações...
      </Text>

      <Loading size={28} />
    </S.Container>
  );
};
