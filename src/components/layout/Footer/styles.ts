import styled from 'styled-components';

export const Container = styled.footer`
  display: flex;
  justify-content: space-between;
  padding: 2.4rem 1.6rem;
`;

export const BlockAbout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.6rem;

  padding: 1.2rem 1.6rem;

  flex: 1;

  color: ${({ theme }) => theme.colors.gray[300]};

  .links {
    display: flex;
    align-items: flex-end;
  }
`;

export const Separator = styled.div`
  width: 2px;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.colors.gray[100]};
`;
