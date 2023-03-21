import { Routes as ReactRoutes } from 'react-router-dom';
import { CustomRoute } from './components/shared/CustomRoute';
import { HomePage, NotFoundPage, PricesPage, SignInPage, SignUpPage } from './pages';

export function Routes() {
  return (
    <ReactRoutes>
      <CustomRoute
        type='public'
        path='/'
        element={<HomePage />}
      />

      <CustomRoute
        type='public'
        path='/prices'
        element={<PricesPage />}
      />

      <CustomRoute
        type='not_authenticated'
        path='/login'
        element={<SignInPage />}
      />

      <CustomRoute
        type='not_authenticated'
        path='/signup'
        element={<SignUpPage />}
      />

      <CustomRoute
        path='*'
        element={<NotFoundPage />}
      />
    </ReactRoutes>
  );
}
