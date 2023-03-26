import { Slot } from '@radix-ui/react-slot';
import styled, { css } from 'styled-components';
import { ClickableScaleProps } from './types';

export const ClickableScale = styled(Slot)<ClickableScaleProps>`
  ${({ disabled }) => !disabled && css`
    transition: transform ${({ theme }) => theme.animations.durations.sh} ease-in-out;

    &:active {
      transform: scale(0.9);
    }
  `};
`;
