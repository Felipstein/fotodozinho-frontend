import styled from 'styled-components';
import { Form } from '../../../components/logic/Form';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  max-width: 45rem;
  margin: auto;
  margin-top: 6.4rem;

  height: 100%;

  .form-container {
    margin-bottom: 1.6rem;
  }
`;

export const FormStyled = styled(Form)`
  display: flex;
  flex-direction: column;

  .inputs {
    display: flex;
    flex-direction: column;
    gap: 1.6rem;

    margin-bottom: 2.4rem;
  }

  .actions {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.2rem;

    button {
      width: 100%;
    }
  }
`;
