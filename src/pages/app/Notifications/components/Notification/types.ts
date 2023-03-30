import { Notification } from '../../../../../types/Notification';

export interface NotificationProps extends Notification {
  onMarkAsRead: (id: string) => void;
  onDelete: (id: string) => void;
}
