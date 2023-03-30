import { Notification } from '../types/Notification';

type DomainNotification = Notification;
type PersistenceNotification = {
  id: string;
  title: string;
  message: string;
  read: boolean;
  createdAt: string;
};

export class NotificationMapper {

  static toDomain(persistenceNotification: PersistenceNotification): DomainNotification {
    return {
      id: persistenceNotification.id,
      title: persistenceNotification.title,
      message: persistenceNotification.message,
      createdAt: new Date(persistenceNotification.createdAt),
      read: persistenceNotification.read,
    };
  }

}
