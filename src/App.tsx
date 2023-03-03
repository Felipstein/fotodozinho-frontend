import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { LoaderProvider } from './contexts/LoaderContext';
import { Routes } from './Routes';
import GlobalStyles from './styles/GlobalStyles';
import _default from './styles/themes/default';

export function App() {
  return (
    <ThemeProvider theme={_default}>
      <GlobalStyles />
      <LoaderProvider>
        <BrowserRouter>
          <Routes />
        </BrowserRouter>
      </LoaderProvider>
    </ThemeProvider>
  );
}
