import { useMemo, useState } from 'react';
import { DataFetchFeedback } from '../../../components/common/DataFetchFeedback';
import { LabelButton } from '../../../components/common/LabelButton';
import { Tab } from '../../../components/common/Tab';
import { Text } from '../../../components/common/Text';
import { useService } from '../../../hooks/useService';
import { useAlreadyAuthUser } from '../../../hooks/useUser';
import { CheckCircleIcon } from '../../../icons/CheckCircleIcon';
import { TrashIcon } from '../../../icons/TrashIcon';
import { NotificationsService } from '../../../services/notifications.service';
import { Notification } from './components/Notification';

import * as S from './styles';

export const Notifications: React.FC = () => {
  const user = useAlreadyAuthUser();

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

        <div className="filters">
          <S.TabSelecterStyled
            onSelect={setFilter}
          >
            <Tab value='all'>
              Todas
            </Tab>

            <Tab value='unread'>
              Não lidas
            </Tab>

            <Tab value='readed'>
              Já lidas
            </Tab>
          </S.TabSelecterStyled>

          <S.TabSelecterStyled
            onSelect={setSort}
          >
            <Tab value='dec'>
              Mais recente
            </Tab>

            <Tab value='asc'>
              Mais antigo
            </Tab>
          </S.TabSelecterStyled>
        </div>

        <div className="actions">
          <LabelButton>
            <CheckCircleIcon size={19} />
            Marcar todas como lidas
          </LabelButton>

          <LabelButton>
            <TrashIcon size={19} />
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
              data: notificationsFiltered,
              isLoading,
              error,
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
