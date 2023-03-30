import { Text } from '../../../../../components/common/Text';
import { IconButton } from '../../../../../components/common/IconButton';
import { CalendarBlankIcon } from '../../../../../icons/CalendarBlankIcon';
import { CheckCircleIcon } from '../../../../../icons/CheckCircleIcon';
import { TrashIcon } from '../../../../../icons/TrashIcon';

import { NotificationProps } from './types';
import * as S from './styles';

export const Notification: React.FC<NotificationProps> = ({
  id,
  title,
  message,
  createdAt,
  read,
}) => {

  return (
    <S.Container>
      <div className="data-info">
        <CalendarBlankIcon size={24} />

        <div className="data-time">
          <Text size='xsm'>
            {createdAt.toLocaleDateString()}
          </Text>

          <Text size='xsm'>
            {createdAt.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
          </Text>
        </div>
      </div>

      <main className="content">
        <Text className='notification-title'>
          Pedido realizado com sucesso!
        </Text>

        <Text className='notification-body' size='sm'>
          Agora só falta escolher o método de pagamento
        </Text>
      </main>

      <div className="actions">
        <IconButton size={26} >
          <CheckCircleIcon />
        </IconButton>

        <IconButton size={26}>
          <TrashIcon />
        </IconButton>
      </div>
    </S.Container>
  );
};
