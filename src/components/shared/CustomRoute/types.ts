import { RouteProps } from 'react-router-dom';

export type CustomRouteType = 'not_authenticated' | 'public' | 'protected' | 'admin';

export type CustomRouteProps = RouteProps & { type?: CustomRouteType };
