import styled from 'styled-components';

import { Container as CheckBoxContainer } from '../../../components/common/CheckBox/styles';
import { Form } from '../../../components/logic/Form';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  max-width: 40rem;
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

  max-width: 100%;

  .inputs {
    display: flex;
    flex-direction: column;
    gap: 1.6rem;

    margin-bottom: 1.6rem;
  }

  .sub-actions {
    display: flex;
    flex-direction: column;
    align-items: center;

    ${CheckBoxContainer} + ${CheckBoxContainer} {
      margin-top: 1.2rem;
    }

    .label-button {
      margin-top: 0.4rem;
    }
  }

  .actions {
    display: flex;
    flex-direction: column;
    gap: 1.2rem;

    margin-top: 3.6rem;
  }
`;
