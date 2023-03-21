import { Route, Routes as ReactRoutes } from 'react-router-dom';
import { CustomRoute } from './components/shared/CustomRoute';
import { HomePage, NotFoundPage, PricesPage, SignInPage, SignUpPage } from './pages';

export function Routes() {
  return (
    <ReactRoutes>
      <Route
        path='/'
        element={<HomePage />}
      />

      <Route
        path='/prices'
        element={<PricesPage />}
      />

      <Route
        path='/login'
        element={
          <CustomRoute type='not_authenticated'>
            <SignInPage />
          </CustomRoute>
        }
      />

      <Route
        path='/signup'
        element={
          <CustomRoute type='not_authenticated'>
            <SignUpPage />
          </CustomRoute>
        }
      />

      <Route
        path='*'
        element={<NotFoundPage />}
      />
    </ReactRoutes>
  );
}
