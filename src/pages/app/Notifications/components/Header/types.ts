export interface HeaderProps {
  totalNotifications: number;
  totalNotificationsUnread: number;
  isMarkingAllReaded: boolean;
  isDeletingReaded: boolean;
  onMarkAllReaded: () => void;
  onDeleteAllReaded: () => void;
  onSetFilter: (value: string) => void;
  onSetSort: (value: string) => void;
}
