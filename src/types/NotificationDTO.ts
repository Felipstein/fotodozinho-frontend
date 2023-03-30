export interface GetNotificationsByUserRequest {
  userId: string;
}

export interface MarkNotificationAsReadRequest {
  notificationId: string;
}

export interface DeleteNotificationRequest {
  notificationId: string;
}
