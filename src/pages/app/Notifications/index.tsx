import { useAuth } from '../../../hooks/useAuth';
import { useService } from '../../../hooks/useService';
import { NotificationsService } from '../../../services/notifications.service';
import { Notification } from './components/Notification';

import * as S from './styles';

export const Notifications: React.FC = () => {
  const { user } = useAuth();

  const {
    data: notifications, isLoading, error,
  } = useService(
    () => user
      ? NotificationsService.getNotificationsByUser({ userId: user.id })
      : Promise.resolve([]),
    []
  );

  console.log(notifications);

  return (
    <S.Container>
      <S.NotificationsContainer>
        <S.NotificationsList>
          {notifications.map(notification => (
            <Notification
              key={notification.id}
              id={notification.id}
              title={notification.title}
              message={notification.message}
              createdAt={notification.createdAt}
              read={notification.read}
            />
          ))}
        </S.NotificationsList>
      </S.NotificationsContainer>
    </S.Container>
  );
};
