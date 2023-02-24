import { Slot } from '@radix-ui/react-slot';
import styled, { css } from 'styled-components';
import { TextProps } from './types';

const baseFontSizeStyle = css<TextProps>`
  font-size: ${({ theme, size }) => theme.size.text[size || 'md']};
  font-weight: ${({ weight }) => weight};
`;

export const SlotStyled = styled(Slot)<TextProps>`
  ${baseFontSizeStyle};
  `;

export const SpanStyled = styled.span<TextProps>`
  ${baseFontSizeStyle};
`;
