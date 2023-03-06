import styled, { css } from 'styled-components';


export const CheckBoxStyled = styled.label<{ checked: boolean }>`
  width: 1.6rem;
  height: 1.6rem;

  border-radius: 4px;
  border: 2px solid ${({ theme }) => theme.colors.gray[900]};

  cursor: pointer;

  .check-icon {
    display: flex;
    align-items: center;
    justify-content: center;

    line-height: 0;

    height: 100%;
    width: 100%;

    visibility: hidden;
  }

  ${({ checked }) => checked && css`
    background-color: ${({ theme }) => theme.colors.blue[400]};

    .check-icon {
      visibility: visible;
    }
  `};

`;

export const Container = styled.div<{ checked: boolean }>`
  position: relative;

  display: flex;
  align-items: center;
  gap: 0.6rem;

  cursor: pointer;

  &:hover {
    span {
      color: ${({ theme }) => theme.colors.gray[400]};
    }

    ${CheckBoxStyled} {
      border-color: ${({ theme }) => theme.colors.gray[400]};

      ${({ checked }) => checked && css`
        background-color: ${({ theme }) => theme.colors.blue[300]};
      `};
    }
  }
`;

export const HiddedCheckBox = styled.input.attrs({ type: 'checkbox' })`
  display: none;
`;

export const LabelStyled = styled.label`
  line-height: 0;
  cursor: inherit;

  span {
    font-weight: 500;
  }
`;
