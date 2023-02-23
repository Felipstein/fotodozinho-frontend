import { Route, Routes as ReactRoutes } from 'react-router-dom';
import { HomePage } from './pages';

export function Routes() {
  return (
    <ReactRoutes>
      <Route path='/' element={<HomePage />} />
    </ReactRoutes>
  );
}
