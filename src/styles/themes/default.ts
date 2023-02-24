import { DefaultTheme } from 'styled-components';

export default {

  font: {
    family: 'Inter, sans-serif',
  },

  size: {
    text: {
      lg: '1.8rem',
      md: '1.6rem',
      sm: '1.4rem',
      xsm: '1.2rem',
      xxsm: '1rem',
      xxxsm: '.8rem',
    },
    heading: {
      lg: '3.6rem',
      md: '3.2rem',
      sm: '2.4rem',
    },
  },

  colors: {
    overlay: 'rgba(0, 0, 0, 0.7)',
    white: '#fff',
    blue: {
      200: '#e3f8ff',
      300: '#88d7ef',
      400: '#40b5d9',
      500: '#269bbf',
    },
    gray: {
      50: '#fafafa',
      75: '#f0f0f0',
      100: '#e4e4e4',
      200: '#d3d3d3',
      300: '#9a9a9a',
      400: '#7b7b7b',
      600: '#3f3f3f',
      900: '#121212',
    },
    red: {
      100: '#ffe4e4',
      200: '#f68a89',
      300: '#f15b5a',
      400: '#ec2e2d',
    },
    green: {
      50: '#e1ffec',
      400: '#55b938',
      500: '#16a34a',
    },
    gold: {
      400: '#ffb800',
    },
  },

} as DefaultTheme;
