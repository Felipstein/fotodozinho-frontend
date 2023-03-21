import { ReactElement } from 'react';

export type CustomRouteType = 'not_authenticated' | 'public' | 'protected' | 'admin';

export interface CustomRouteProps {
  type?: CustomRouteType;
  children: ReactElement;
}
