import { Navigate, Route } from 'react-router-dom';
import { useAuth } from '../../../contexts/AuthContext';
import { NotFoundPage } from '../../../pages';
import { CustomRouteProps } from './types';

export const CustomRoute: React.FC<CustomRouteProps> = ({ type = 'public', ...props }) => {

  const { isAuthenticated, user } = useAuth();

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

  return <Route {...props} />;
};
