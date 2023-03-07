import styled, { css } from 'styled-components';
import { OverlayProps } from './types';

export const OverlayStyle = styled.div<OverlayProps>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  background-color: ${({ theme }) => theme.colors.overlay};
  /* backdrop-filter: blur(${({ theme }) => theme.blurs.md}); */

  z-index: ${({ zIndex }) => zIndex};

  ${({ onClick }) => onClick && css`
    cursor: pointer;
  `};
`;
