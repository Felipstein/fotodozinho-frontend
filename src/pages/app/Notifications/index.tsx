import { DataFetchFeedback } from '../../../components/common/DataFetchFeedback';
import { LabelButton } from '../../../components/common/LabelButton';
import { Text } from '../../../components/common/Text';
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
      <S.Header>
        <div className="total-info">
          <h3>
            {notifications.length} Notificaç{notifications.length === 1 ? 'ão' : 'ões'}
          </h3>

          <Text size='sm'>
            {notifications.filter(notification => !notification.read).length} não lida{notifications.filter(notification => !notification.read).length === 1 ? '' : 's'}
          </Text>
        </div>

        <div className="tags-filter">
          Todas
          Não lidas
          Já lidas
        </div>

        <div className="actions">
          <LabelButton>
            Marcar todas como lidas
          </LabelButton>

          <LabelButton>
            Remover todas notificações já lidas
          </LabelButton>
        </div>
      </S.Header>

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
              <li key={notification.id}>
                <Notification
                  id={notification.id}
                  title={notification.title}
                  message={notification.message}
                  createdAt={notification.createdAt}
                  read={notification.read}
                  onMarkAsRead={handleMarkNotificationAsRead}
                  onDelete={handleDeleteNotification}
                />
              </li>
            ))}
          </DataFetchFeedback>

        </S.NotificationsList>
      </S.NotificationsContainer>
    </S.Container>
  );
};
