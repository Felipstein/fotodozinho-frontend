import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { ThemeProvider } from 'styled-components';
import 'react-toastify/dist/ReactToastify.css';

import { LoaderProvider } from './contexts/LoaderContext';

import GlobalStyles from './styles/GlobalStyles';
import _default from './styles/themes/default';

import { Routes } from './Routes';
import { AuthProvider } from './contexts/AuthContext';

export function App() {
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
          <BrowserRouter>
            <Routes />
          </BrowserRouter>
        </LoaderProvider>
      </AuthProvider>
    </ThemeProvider>
  );
}
