import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
  }

  body {
    font-family: ${({ theme }) => theme.font.family};
    font-size: ${({ theme }) => theme.font.size.text.md};

    background-color: ${({ theme }) => theme.colors.gray[50]};
    color: ${({ theme }) => theme.colors.gray[900]};
  }

  h1 {
    font-size: ${({ theme }) => theme.font.size.heading.lg};
  }

  h2 {
    font-size: ${({ theme }) => theme.font.size.heading.md};
  }

  h3 {
    font-size: ${({ theme }) => theme.font.size.heading.sm};
  }

`;
