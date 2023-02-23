import { ThemeProvider } from 'styled-components';
import GlobalStyles from './styles/GlobalStyles';
import _default from './styles/themes/default';

export function App() {
  return (
    <ThemeProvider theme={_default}>
      <GlobalStyles />
      <p>App</p>
    </ThemeProvider>
  );
}
