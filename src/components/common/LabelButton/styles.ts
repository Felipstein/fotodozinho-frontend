import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { LabelButtonProps } from './types';

export const LinkStyled = styled(Link)<LabelButtonProps & { $isBlueVariant?: boolean }>`
  position: relative;

  font-weight: 400;
  font-size: 1.4rem;

  display: flex;
  align-items: center;
  gap: 0.4rem;

  color: ${({ theme, $isBlueVariant }) => $isBlueVariant ? theme.colors.blue[500] : theme.colors.gray[900]};
  text-decoration: none;

  padding-bottom: 2px;

  transition: color ${({ theme }) => theme.animations.durations.sh} ease-in-out;

  &::after {
    content: "";

    position: absolute;
    bottom: 0;
    left: 0;

    height: 2px;
    width: 100%;

    border-radius: 4px;

    background-color: ${({ theme , $isBlueVariant }) => $isBlueVariant ? theme.colors.blue[400]: theme.colors.gray[600]};

    transform: scaleX(0);

    transition:
      transform ${({ theme }) => theme.animations.durations.md} ease-in-out,
      background-color ${({ theme }) => theme.animations.durations.sh} ease-in-out;
  }

  &:hover {
    color: ${({ theme, $isBlueVariant }) => $isBlueVariant ? theme.colors.blue[400] : theme.colors.gray[600]};

    &::after {
      transform: scaleX(1);
    }
  }

  &:active {
    color: ${({ theme }) => theme.colors.blue[400]};

    &::after {
      background-color: ${({ theme }) => theme.colors.blue[400]};
    }
  }
`;
