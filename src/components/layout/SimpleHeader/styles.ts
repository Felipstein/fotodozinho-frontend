import styled from 'styled-components';

export const Container = styled.header`
  position: relative;

  display: flex;
  justify-content: flex-end;
  align-items: center;

  width: 100%;

  padding: 3.2rem 5.8rem;

  .logo-container {
    position: absolute;
    top: 3.2rem;
    left: 50%;
    transform: translateX(-50%);
  }

  .actions {
    display: flex;
    gap: 1.6rem;
    align-items: center;
  }

  @media screen and (max-width: 1280px) {
    .logo-container {
      left: 5.8rem;
      transform: translateX(0);
    }
  }

  @media screen and (max-width: 595px) {
    position: static;
    flex-direction: column;
    gap: 2.4rem;

    .logo-container {
      position: static;
    }
  }
`;
