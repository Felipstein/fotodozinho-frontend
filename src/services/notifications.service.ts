import { Notification } from '../types/Notification';
import { NotificationMapper } from '../mappers/NotificationMapper';
import { DeleteNotificationRequest, GetNotificationsByUserRequest, MarkNotificationAsReadRequest } from '../types/NotificationDTO';
import { api } from './api.service';

export class NotificationsService {

  static async getAllNotifications(): Promise<Notification[]> {
    const notifications = await api.get('/notifications');

    return notifications.map(NotificationMapper.toDomain);
  }

  static async getNotificationsByUser({ userId }: GetNotificationsByUserRequest): Promise<Notification[]> {
    const notifications = await api.get(`/notifications/user/${userId}`);

    return notifications.map(NotificationMapper.toDomain);
  }

  static async markNotificationAsRead({ notificationId }: MarkNotificationAsReadRequest): Promise<Notification> {
    const notification = await api.patch(`/notifications/${notificationId}`, { read: true });

    return NotificationMapper.toDomain(notification);
  }

  static async deleteNotification({ notificationId }: DeleteNotificationRequest): Promise<void> {
    await api.delete(`/notifications/${notificationId}`);
  }

}
