import { NoDataFound } from '../../../components/common/NoDataFound';
import { useAuth } from '../../../hooks/useAuth';
import { useService } from '../../../hooks/useService';
import { useAlreadyAuthUser } from '../../../hooks/useUser';
import { NotificationsService } from '../../../services/notifications.service';
import { LoadingNotifications } from './components/LoadingNotifications';
import { Notification } from './components/Notification';

import * as S from './styles';

export const Notifications: React.FC = () => {
  const user = useAlreadyAuthUser();

  const {
    data: notifications, isLoading, error,
  } = useService(() => NotificationsService.getNotificationsByUser({ userId: user.id }), []);

  return (
    <S.Container>
      <S.NotificationsContainer>
        <S.NotificationsList>

          {(isLoading || true) && (
            <LoadingNotifications />
          )}

          {!isLoading && notifications.map(notification => (
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
