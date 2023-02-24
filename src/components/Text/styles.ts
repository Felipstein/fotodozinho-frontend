import { Slot } from '@radix-ui/react-slot';
import styled from 'styled-components';
import { TextProps } from './types';

export const SlotStyled = styled(Slot)<TextProps>`
  font-size: ${({ theme, size }) => theme.size.text[size || 'md']};
  `;

export const SpanStyled = styled.span<TextProps>`
  font-size: ${({ theme, size }) => theme.size.text[size || 'md']};
`;
