import { Text } from '../../../../../components/common/Text';
import { IconButton } from '../../../../../components/common/IconButton';
import { CalendarBlankIcon } from '../../../../../icons/CalendarBlankIcon';
import { CheckCircleIcon } from '../../../../../icons/CheckCircleIcon';
import { TrashIcon } from '../../../../../icons/TrashIcon';

import { NotificationProps } from './types';
import * as S from './styles';
import { useService } from '../../../../../hooks/useService';
import { NotificationsService } from '../../../../../services/notifications.service';

export const Notification: React.FC<NotificationProps> = ({
  id,
  title,
  message,
  createdAt,
  read,
}) => {

  const {
    isLoading: isMarkingNotificationAsRead,
  } = useService(() => NotificationsService.markNotificationAsRead({ notificationId: id }));

  const {
    isLoading: isDeletingNotification,
  } = useService(() => NotificationsService.deleteNotification({ notificationId: id }));

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
          <IconButton size={26} >
            <CheckCircleIcon />
          </IconButton>
        )}

        <IconButton size={26}>
          <TrashIcon />
        </IconButton>
      </div>
    </S.Container>
  );
};
