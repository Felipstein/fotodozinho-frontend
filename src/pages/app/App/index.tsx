import { Outlet } from 'react-router-dom';
import { AppLayout } from '../../../components/layout/AppLayout';

export const App: React.FC = () => {
  return (
    <AppLayout>
      <Outlet />
    </AppLayout>
  );
};
