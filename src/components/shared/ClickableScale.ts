import { Slot } from '@radix-ui/react-slot';
import styled from 'styled-components';

export const ClickableScale = styled(Slot)`
  transition: transform ${({ theme }) => theme.animations.durations.sh} ease-in-out;

  &:active {
    transform: scale(0.9);
  }
`;
