import { Text } from '../../../../../components/common/Text';
import { IconButton } from '../../../../../components/common/IconButton';
import { CalendarBlankIcon } from '../../../../../icons/CalendarBlankIcon';
import { CheckCircleIcon } from '../../../../../icons/CheckCircleIcon';
import { TrashIcon } from '../../../../../icons/TrashIcon';
import { NotificationsService } from '../../../../../services/notifications.service';

import { NotificationProps } from './types';
import * as S from './styles';
import { useState } from 'react';
import { toast } from 'react-toastify';

export const Notification: React.FC<NotificationProps> = ({
  id,
  title,
  message,
  createdAt,
  read,
  onMarkAsRead,
  onDelete,
}) => {
  const [isMarkingNotificationAsRead, setIsMarkingNotificationAsRead] = useState(false);
  const [isDeletingNotification, setIsDeletingNotification] = useState(false);

  async function handleMarkNotificationAsRead() {
    try {
      setIsMarkingNotificationAsRead(true);

      await NotificationsService.markNotificationAsRead({ notificationId: id });

      onMarkAsRead(id);
    } catch (err: Error | any) {
      toast.error(err.message || 'Ocorreu um erro enquanto tentavamos marcar sua notificação como lida, tente novamente.');
    } finally {
      setIsMarkingNotificationAsRead(false);
    }
  }

  async function handleDeleteNotification() {
    try {
      setIsDeletingNotification(true);

      await NotificationsService.deleteNotification({ notificationId: id });

      onDelete(id);
    } catch (err: Error | any) {
      toast.error(err.message || 'Ocorreu um erro enquanto tentavamos deletar sua notificação, tente novamente.');
    } finally {
      setIsDeletingNotification(false);
    }
  }

  return (
    <S.Container read={read}>
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
          {title}
        </Text>

        <Text className='notification-body' size='sm'>
          {message}
        </Text>
      </main>

      <div className="actions">
        {!read && (
          <IconButton
            size={26}
            onClick={handleMarkNotificationAsRead}
            isLoading={isMarkingNotificationAsRead}
            isDisabled={isDeletingNotification}
          >
            <CheckCircleIcon />
          </IconButton>
        )}

        <IconButton
          size={26}
          onClick={handleDeleteNotification}
          isLoading={isDeletingNotification}
          isDisabled={isMarkingNotificationAsRead}
        >
          <TrashIcon />
        </IconButton>
      </div>
    </S.Container>
  );
};
