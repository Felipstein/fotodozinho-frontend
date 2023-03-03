import styled, { css, keyframes } from 'styled-components';

const show = keyframes`
  from {
    transform: translateY(100%);
  }

  to {
    transform: translateY(0);
  }
  `;

const hidden = keyframes`
  from {
    transform: translateY(0);
  }

  to {
    transform: translateY(-100%);
  }
`;

export const Container = styled.div<{ isLeaving: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;

  display: flex;
  flex-direction: column;
  align-items: center;

  background-color: ${({ theme }) => theme.colors.blue[500]};

  animation: ${show} 0.8s ease-out forwards;

  ${({ isLeaving }) => isLeaving && css`
    animation: ${hidden} 0.8s ease-in forwards;
  `}

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
`;
