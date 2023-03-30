import { APIError } from '../errors/APIError';
import { Notification } from '../types/Notification';
import { DeleteNotificationRequest, GetNotificationsByUserRequest, MarkNotificationAsReadRequest } from '../types/NotificationDTO';
import { api } from './api.service';

export class NotificationsService {

  static async getAllNotifications(): Promise<Notification[]> {
    return await api.get('/notifications');
  }

  static async getNotificationsByUser({ userId }: GetNotificationsByUserRequest): Promise<Notification[]> {
    throw new APIError('Hmm, você não tem permissão', 403);

  }

  static async markNotificationAsRead({ notificationId }: MarkNotificationAsReadRequest): Promise<Notification> {
    return await api.patch(`/notifications/${notificationId}`, { read: true });
  }

  static async deleteNotification({ notificationId }: DeleteNotificationRequest): Promise<void> {
    await api.delete(`/notifications/${notificationId}`);
  }

}
