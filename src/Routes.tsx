import { Route, Routes as ReactRoutes } from 'react-router-dom';
import { HomePage, NotFoundPage, PricesPage, SignInPage } from './pages';

export function Routes() {
  return (
    <ReactRoutes>
      <Route path='/' element={<HomePage />} />

      <Route path='/prices' element={<PricesPage />} />

      <Route path='/login' element={<SignInPage />} />

      <Route path='*' element={<NotFoundPage />} />
    </ReactRoutes>
  );
}
