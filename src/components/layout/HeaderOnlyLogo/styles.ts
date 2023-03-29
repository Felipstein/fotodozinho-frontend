import styled from 'styled-components';

export const Container = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2.4rem;

  #top-title {
    font-weight: 500;
    text-align: center;
  }

  #bottom-title {
    margin-bottom: 2.8rem;

    font-weight: 600;
    text-align: center;
  }
`;
