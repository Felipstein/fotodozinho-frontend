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
      <h1>Notificação</h1>
    </S.Container>
  );
};
