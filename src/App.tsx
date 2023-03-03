import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { SplashScreen } from './components/SplashScreen';
import { Routes } from './Routes';
import GlobalStyles from './styles/GlobalStyles';
import _default from './styles/themes/default';

export function App() {
  return (
    <ThemeProvider theme={_default}>
      <GlobalStyles />
      <SplashScreen visible />
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </ThemeProvider>
  );
}
