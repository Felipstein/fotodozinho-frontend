export type User = UserAdmin | UserPublic;

export interface UserAdmin {
  id: string;
  name: string;
  email: string;
  phone: string | null;
  createdAt: Date;
  lastLogin: Date;
  admin: boolean;
  verified: boolean;
  notifyServicesByEmail: boolean;
  totalPrints: number;
  totalPrintOrders: number;
  totalPurchases: number;
  totalPurchaseOrders: number;
}

export interface UserPublic {
  id: string;
  name: string;
  email: string;
  phone: string | null;
  createdAt: Date;
  totalPrints: number;
  totalPrintOrders: number;
  totalPurchases: number;
  totalPurchaseOrders: number;
}
