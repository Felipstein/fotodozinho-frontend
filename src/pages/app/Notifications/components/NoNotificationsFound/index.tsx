import { Text } from '../../../../../components/common/Text';
import { BellSplash } from '../../../../../icons/BellSplash';

import * as S from './styles';

export const NoNotificationsFound: React.FC = () => {
  return (
    <S.Container>
      <BellSplash />
      <Text size='sm'>
        Nenhuma notificação para você
      </Text>
    </S.Container>
  );
};
