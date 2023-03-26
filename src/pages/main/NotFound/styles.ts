import styled from 'styled-components';

import { NotFoundContainerProps } from './types';

export const Container = styled.div<NotFoundContainerProps>`
  height: 100vh;

  background-image: url(${({ backgroundImage }) => backgroundImage});
  background-repeat: no-repeat;
  background-size: cover;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  #main-title {
    font-weight: 900;
    font-size: 12.8rem;
    letter-spacing: 2.1rem;
    color: ${({ theme }) => theme.colors.gray[100]};
    text-shadow: ${({ theme }) => theme.shadows.soft};
    filter: blur(${({ theme }) => theme.blurs.md});
  }

  .sub-title span {
    position: relative;

    color: ${({ theme }) => theme.colors.gray[100]};
    font-weight: 500;

    display: block;
    text-align: center;
  }

  .action {
    margin-top: 3.2rem;
  }

  .logo-container {
    position: absolute;

    bottom: 6.4rem;
  }
`;

export const SoftOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;

  background-color: ${({ theme }) => theme.colors.gray[900]};
  opacity: 0.69;
`;
