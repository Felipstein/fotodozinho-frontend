import styled, { css, keyframes } from 'styled-components';

const show = keyframes`
  from { transform: translateY(100%)}
  to { transform: translateY(0) }
`;

const hidden = keyframes`
  from { transform: translateY(0) }
  to { transform: translateY(-100%) }
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(6%);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const fadeOut = keyframes`
  from {
    opacity: 1;
    transform: translateY(0);
  }

  to {
    opacity: 0;
    transform: translateY(-6%);
  }
`;

export const Container = styled.div<{ isLeaving: boolean, noAnimationOnDisplay: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;

  background-color: ${({ theme }) => theme.colors.blue[500]};

  ${({ noAnimationOnDisplay }) => !noAnimationOnDisplay && css`
    animation: ${show} 0.6s ease-out forwards;
  `}

  ${({ isLeaving }) => isLeaving && css`
  animation: ${hidden} 0.6s ease-in forwards;
  `}

  .content {
    display: flex;
    flex-direction: column;
    align-items: center;

    height: 100%;

    ${({ noAnimationOnDisplay }) => !noAnimationOnDisplay && css`
      opacity: 0;
      transform: translateY(6%);

      animation: ${fadeIn} 0.6s ease-out 0.6s forwards;
    `}

    ${({ isLeaving }) => isLeaving && css`
      animation: ${fadeOut} 0.6s ease-out forwards;
    `};

    .centered {
      flex: 1;

      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 2.4rem;

      span {
        color: ${({ theme }) => theme.colors.white};
      }

      .loading-message {
        margin-top: 0.8rem;

        span {
          color: ${({ theme }) => theme.colors.white};
          opacity: 0.65;
        }
      }
    }

    .mini-footer {
      margin-bottom: 4.8rem;

      span {
        color: ${({ theme }) => theme.colors.white};
        opacity: 0.4;
      }
    }
  }

`;
