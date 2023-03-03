import { Route, Routes as ReactRoutes } from 'react-router-dom';
import { HomePage, PricesPage } from './pages';

export function Routes() {
  return (
    <ReactRoutes>
      <Route path='/' element={<HomePage />} />

      <Route path='/prices' element={<PricesPage />} />
    </ReactRoutes>
  );
}
