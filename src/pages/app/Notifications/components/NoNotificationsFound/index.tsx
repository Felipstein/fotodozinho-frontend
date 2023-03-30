import { Text } from '../../../../../components/common/Text';

import * as S from './styles';

export const NoNotificationsFound: React.FC = () => {
  return (
    <S.Container>
      <Text size='sm'>
        Nenhuma notificação para você
      </Text>
    </S.Container>
  );
};
