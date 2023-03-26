import { BrowserRouter, useLocation } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { ThemeProvider } from 'styled-components';
import 'react-toastify/dist/ReactToastify.css';

import { LoaderProvider } from './contexts/LoaderContext';

import GlobalStyles from './styles/GlobalStyles';
import _default from './styles/themes/default';

import { Routes } from './Routes';
import { AuthProvider } from './contexts/AuthContext';
import { DevPanel } from './components/development/DevPanel';

export function App() {

  const developemnt = import.meta.env.DEV;

  return (
    <ThemeProvider theme={_default}>
      <GlobalStyles />
      <AuthProvider>
        <LoaderProvider>
          <ToastContainer
            position='bottom-center'
            pauseOnHover={false}
            theme='colored'
            hideProgressBar
          />
          {developemnt && <DevPanel />}
          <BrowserRouter>
            <Routes />
          </BrowserRouter>
        </LoaderProvider>
      </AuthProvider>
    </ThemeProvider>
  );
}
