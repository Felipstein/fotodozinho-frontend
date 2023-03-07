import { createGlobalStyle } from 'styled-components';
import { Scrollbar } from '../components/Scrollbar';

export default createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;

    @media screen and (max-width: 840px) {
      font-size: 50%;
    }
  }

  body {
    font-family: ${({ theme }) => theme.font.family};
    font-size: ${({ theme }) => theme.size.text.md};

    background-color: ${({ theme }) => theme.colors.gray[50]};
    color: ${({ theme }) => theme.colors.gray[900]};

    height: 100vh;
  }

  #root {
    height: 100%;
  }

  h1 {
    font-size: ${({ theme }) => theme.size.heading.lg};
  }

  h2 {
    font-size: ${({ theme }) => theme.size.heading.md};
  }

  h3 {
    font-size: ${({ theme }) => theme.size.heading.sm};
  }

`;
