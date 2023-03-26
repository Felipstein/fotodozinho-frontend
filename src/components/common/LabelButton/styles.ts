import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { LabelButtonProps } from './types';

export const LinkStyled = styled(Link)<LabelButtonProps & { $isBlueVariant?: boolean }>`
  position: relative;
  font-weight: 400;
  color: ${({ theme, $isBlueVariant }) => $isBlueVariant ? theme.colors.blue[500] : theme.colors.gray[900]};
  text-decoration: none;
  font-size: 1.4rem;
  padding-bottom: 2px;
  transition: color ${({ theme }) => theme.animations.durations.sh} ease-in-out;

  &::after {
    content: "";
    position: absolute;
    height: 2px;
    border-radius: 4px;
    bottom: 0;
    left: 0;
    background-color: ${({ theme , $isBlueVariant }) => $isBlueVariant ? theme.colors.blue[400]: theme.colors.gray[600]};
    width: 100%;
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
