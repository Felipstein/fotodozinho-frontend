import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 100%;
`;

export const Modal = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;

  max-width: 72.8rem;
  width: 90%;

  max-height: 90%;

  border-radius: 8px;
  padding: 1.6rem 2.4rem;

  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: ${({ theme }) => theme.shadows.soft};

  header {
    width: 100%;
  }

  main {
    border-radius: 8px;
    background-color: ${({ theme }) => theme.colors.gray[75]};

    padding: 0.8rem;

    overflow-y: auto;

    pre {
      font-family: ${({ theme }) => theme.font.family};
      color: ${({ theme }) => theme.colors.gray[600]};
    }
  }

  footer {
    display: flex;
    flex-direction: column;
    align-items: center;

    text-align: justify;
  }

  .actions {
    display: flex;
    justify-content: flex-end;
  }
`;
