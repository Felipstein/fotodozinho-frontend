import { DataFetchFeedback } from '../../../components/common/DataFetchFeedback';
import { useService } from '../../../hooks/useService';
import { useAlreadyAuthUser } from '../../../hooks/useUser';
import { NotificationsService } from '../../../services/notifications.service';
import { Notification } from './components/Notification';

import * as S from './styles';

export const Notifications: React.FC = () => {
  const user = useAlreadyAuthUser();

  const {
    data: notifications, isLoading, error, fetchDataAgain, setData: setNotifications,
  } = useService(
    () => NotificationsService.getNotificationsByUser({ userId: user.id }),
    [],
    { canManipuleStateOfData: true },
  );

  function handleMarkNotificationAsRead(id: string) {
    setNotifications(prevState => prevState.map(
      notification => {
        if(notification.id === id) {
          return {
            ...notification,
            read: true,
          };
        }

        return notification;
      }
    ));
  }

  function handleDeleteNotification(id: string) {
    setNotifications(prevState => prevState.filter(
      notification => notification.id !== id,
    ));
  }

  return (
    <S.Container>
      <S.NotificationsContainer>
        <S.NotificationsList>
          <DataFetchFeedback
            dataName='notificações'
            onTryAgain={fetchDataAgain}
            dataFetchHookProps={{
              data: notifications,
              isLoading,
              error,
            }}
          >
            {notifications.map(notification => (
              <Notification
                key={notification.id}
                id={notification.id}
                title={notification.title}
                message={notification.message}
                createdAt={notification.createdAt}
                read={notification.read}
                onMarkAsRead={handleMarkNotificationAsRead}
                onDelete={handleDeleteNotification}
              />
            ))}
          </DataFetchFeedback>

        </S.NotificationsList>
      </S.NotificationsContainer>
    </S.Container>
  );
};
