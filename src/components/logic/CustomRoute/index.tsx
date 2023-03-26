import { Navigate } from 'react-router-dom';
import { useAuth } from '../../../contexts/AuthContext';
import { NotFoundPage } from '../../../pages';
import { CustomRouteProps } from './types';

export const CustomRoute: React.FC<CustomRouteProps> = ({ type = 'public', children }) => {

  const { isAuthenticated, user } = useAuth();

  if(type === 'not_authenticated' && isAuthenticated) {
    return <Navigate to='/app' />;
  }

  if(type === 'protected') {
    if(!isAuthenticated) {
      return <Navigate to='/login' />;
    }

    if(!user!.verified) {
      return <Navigate to='/verifyrequest' />;
    }
  }

  if(type === 'protected_without_required_verification' && !isAuthenticated) {
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
