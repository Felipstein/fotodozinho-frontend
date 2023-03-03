import { useEffect, useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { SplashScreen } from './components/SplashScreen';
import { Routes } from './Routes';
import GlobalStyles from './styles/GlobalStyles';
import _default from './styles/themes/default';

export function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoading(true);

      setTimeout(() => {
        setLoading(false);
      }, 4000);
    }, 2000);
  }, []);

  return (
    <ThemeProvider theme={_default}>
      <GlobalStyles />
      <SplashScreen visible={loading} isLoading />
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </ThemeProvider>
  );
}
