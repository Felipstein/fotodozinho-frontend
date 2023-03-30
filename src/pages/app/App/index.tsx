import { Outlet } from 'react-router-dom';
import { AppLayout } from '../../../components/layout/AppLayout';
import { SplashScreen } from '../../../components/layout/SplashScreen';
import { useAuth } from '../../../hooks/useAuth';

export const App: React.FC = () => {
  const { isLoading: isValidatingAuthToken } = useAuth();

  return (
    <AppLayout>
      <SplashScreen
        visible={isValidatingAuthToken}
        loadingMessage='Verificando sua sessão...'
        instantlyDisplay
      />

      {!isValidatingAuthToken && (
        <Outlet />
      )}
    </AppLayout>
  );
};
