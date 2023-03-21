import { Navigate } from 'react-router-dom';
import { useAuth } from '../../../contexts/AuthContext';
import { NotFoundPage } from '../../../pages';
import { CustomRouteProps } from './types';

export const CustomRoute: React.FC<CustomRouteProps> = ({ type = 'public', children }) => {

  const { redirect, isAuthenticated, user } = useAuth();

  if(!redirect) {
    return children;
  }

  if(type === 'not_authenticated' && isAuthenticated) {
    return <Navigate to='/app' />;
  }

  if(type === 'protected' && !isAuthenticated) {
    return <Navigate to='/login' />;
  }

  if(type === 'admin') {
    if(!user) {
      return <NotFoundPage />;
    }

    if(!user.admin) {
      return <NotFoundPage />;
    }
  }

  return children;
};
