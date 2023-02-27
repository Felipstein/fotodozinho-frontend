import 'styled-components';

declare module 'styled-components' {

  export interface DefaultTheme {
    font: {
      family: string;
    };

    size: {
      text: {
        xlg: string;
        lg: string;
        md: string;
        sm: string;
        xsm: string;
        xxsm: string;
        xxxsm: string;
      };
      heading: {
        lg: string;
        md: string;
        sm: string;
      };
    };

    colors: {
      overlay: string;
      white: string;
      blue: {
        200: string;
        300: string;
        400: string;
        500: string;
      };
      gray: {
        50: string;
        75: string;
        100: string;
        200: string;
        300: string;
        400: string;
        600: string;
        900: string;
      };
      red: {
        100: string;
        200: string;
        300: string;
        400: string;
      };
      green: {
        50: string;
        400: string;
        500: string;
      };
      gold: {
        400: string;
      };
    };

    animations: {
      durations: {
        sh: string;
        md: string;
        lg: string;
      };
    };

  }

}
