import { useMemo, useState } from 'react';
import { toast } from 'react-toastify';
import { DataFetchFeedback } from '../../../components/common/DataFetchFeedback';
import { LoadingData } from '../../../components/common/LoadingData';
import { useService } from '../../../hooks/useService';
import { useAlreadyAuthUser } from '../../../hooks/useUser';
import { NotificationsService } from '../../../services/notifications.service';
import { Header } from './components/Header';
import { NoNotificationsFound } from './components/NoNotificationsFound';
import { Notification } from './components/Notification';

import * as S from './styles';

export const Notifications: React.FC = () => {
  const user = useAlreadyAuthUser();

  const [isMarkingAllReaded, setIsMarkingAllReaded] = useState(false);
  const [isDeletingReaded, setIsDeletingAllReaded] = useState(false);

  const [filter, setFilter] = useState('all');
  const [sort, setSort] = useState('dec');

  const {
    data: notifications, isLoading, error, fetchDataAgain, setData: setNotifications,
  } = useService(
    () => NotificationsService.getNotificationsByUser({ userId: user.id }),
    [],
    { canManipuleStateOfData: true },
  );

  const notificationsSorted = useMemo(() => (
    notifications.sort(
      (prev, current) => sort === 'asc'
        ? prev.createdAt.getTime() - current.createdAt.getTime()
        : current.createdAt.getTime() - prev.createdAt.getTime(),
    )
  ), [notifications, sort]);

  const notificationsFiltered = useMemo(() => {

    if(filter === 'readed') {
      return notificationsSorted.filter(notification => notification.read );
    }

    if(filter === 'unread') {
      return notificationsSorted.filter(notification => !notification.read );
    }

    return notificationsSorted;

  }, [notificationsSorted, filter]);

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

  async function handleMarkAllReaded() {
    try {
      setIsMarkingAllReaded(true);


      const notificationsId: string[] = [];

      const promises = notificationsSorted.filter(notification => !notification.read).map(
        async ({ id }) => {
          notificationsId.push(id);

          return NotificationsService.markNotificationAsRead({ notificationId: id });
        }
      );

      await Promise.all(promises);
      notificationsId.forEach(notificationId => handleMarkNotificationAsRead(notificationId));

      if(notificationsId.length > 0) {
        toast.success(`${notificationsId.length} notificaç${notificationsId.length > 1 ? 'ções' : 'ão'} marcada${notificationsId.length > 1 ? 's' : ''} como lida${notificationsId.length > 1 ? 's' : ''} com êxito.`);
      }
    } catch (err: Error | any) {
      toast.error(err.message || 'Ocorreu um erro ao tentar marcar todas as notificações como já lidas, tente novamente.');
    } finally {
      setIsMarkingAllReaded(false);
    }
  }

  async function handleDeleteAllReaded() {
    try {
      setIsDeletingAllReaded(true);

      const notificationsId: string[] = [];

      const promises = notificationsSorted.filter(notification => notification.read).map(
        async ({ id }) => {
          notificationsId.push(id);

          return NotificationsService.deleteNotification({ notificationId: id });
        }
      );

      await Promise.all(promises);
      notificationsId.forEach(notificationId => handleDeleteNotification(notificationId));

      if(notificationsId.length > 0) {
        toast.success(`${notificationsId.length} notificaç${notificationsId.length > 1 ? 'ções' : 'ão'} deletada${notificationsId.length > 1 ? 's' : ''} com êxito.`);
      }
    } catch (err: Error | any) {
      toast.error(err.message || 'Ocorreu um erro ao tentar deletar todas as notificações já lidas, tente novamente.');
    } finally {
      setIsDeletingAllReaded(false);
    }
  }

  return (
    <S.Container>
      <Header
        totalNotifications={notifications.length}
        totalNotificationsUnread={notifications.filter(notification => !notification.read).length}
        isMarkingAllReaded={isMarkingAllReaded}
        isDeletingReaded={isDeletingReaded}
        onMarkAllReaded={handleMarkAllReaded}
        onDeleteAllReaded={handleDeleteAllReaded}
        onSetFilter={setFilter}
        onSetSort={setSort}
      />

      <S.NotificationsContainer>
        <S.NotificationsList>
          <DataFetchFeedback
            dataName='notificações'
            onTryAgain={fetchDataAgain}
            dataFetchHookProps={{
              data: notificationsFiltered,
              isLoading,
              error,
            }}
            modify={{
              noDataFoundComponent: <NoNotificationsFound />,
              loadingComponent: <LoadingData dataName='notificações' style={{
                height: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }} />
            }}
          >
            {notificationsFiltered.map(notification => (
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
