import styled from 'styled-components';
import { Scrollbar } from '../Scrollbar';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 100%;
`;

export const Modal = styled.div`
  max-width: 72.8rem;
  width: 90%;

  max-height: 90%;

  border-radius: 8px;
  padding: 1.6rem 2.4rem;

  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: ${({ theme }) => theme.shadows.soft};

  overflow-y: auto;

  ${Scrollbar}
`;
