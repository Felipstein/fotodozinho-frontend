import { NotificationProps } from './types';
import * as S from './styles';
import { InfoIcon } from '../../../../../icons/InfoIcon';
import { Text } from '../../../../../components/common/Text';
import { IconButton } from '../../../../../components/common/IconButton';
import { WarnIcon } from '../../../../../icons/WarnIcon';
import { CalendarBlankIcon } from '../../../../../icons/CalendarBlankIcon';

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
            08/01/2022
          </Text>

          <Text size='xsm'>
            10:29
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
        <IconButton>
          <InfoIcon />
        </IconButton>

        <IconButton>
          <WarnIcon />
        </IconButton>
      </div>
    </S.Container>
  );
};
