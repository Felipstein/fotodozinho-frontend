import { Route, Routes as ReactRoutes } from 'react-router-dom';
import { CustomRoute } from './components/logic/CustomRoute';
import { AppPage, ForgotPasswordPage, HomePage, NotFoundPage, NotificationsPage, PricesPage, PrintPage, ResetPasswordPage, SignInPage, SignUpPage, ValidateEmailPage, VerifyRequirePage } from './pages';

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
        path='/forgot-password'
        element={
          <CustomRoute type='not_authenticated'>
            <ForgotPasswordPage />
          </CustomRoute>
        }
      />

      <Route
        path='/reset-password'
        element={
          <CustomRoute type='not_authenticated'>
            <ResetPasswordPage />
          </CustomRoute>
        }
      />

      <Route
        path='/verifyrequest'
        element={
          <CustomRoute type='protected_without_required_verification'>
            <VerifyRequirePage />
          </CustomRoute>
        }
      />

      <Route
        path='/validateemail/:validateToken'
        element={
          <CustomRoute type='protected_without_required_verification'>
            <ValidateEmailPage />
          </CustomRoute>
        }
      />

      <Route
        path='/app'
        element={
          <CustomRoute type='protected'>
            <AppPage />
          </CustomRoute>
        }
      >
        <Route
          path='notifications'
          element={<NotificationsPage />}
        />

        <Route
          path='print'
          element={<PrintPage />}
        />
      </Route>

      <Route
        path='*'
        element={<NotFoundPage />}
      />
    </ReactRoutes>
  );
}
