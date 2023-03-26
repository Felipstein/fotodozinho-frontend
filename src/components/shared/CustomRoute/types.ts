import { ReactElement } from 'react';

export type CustomRouteType = 'not_authenticated' | 'public' | 'protected' | 'protected_without_required_verification' | 'admin';

export interface CustomRouteProps {
  type?: CustomRouteType;
  children: ReactElement;
}
