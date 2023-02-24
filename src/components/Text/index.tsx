import { ReactNode } from 'react';

import * as S from './styles';

export interface TextProps {
  asChild?: boolean;
  size?: 'lg' | 'md' | 'sm' | 'xsm' | 'xxsm' | 'xxxsm';
  children: ReactNode;
}

export const Text: React.FC<TextProps> = ({ asChild = false, size = 'md', children }) => {
  const Comp = asChild ? S.SlotStyled : S.SpanStyled;

  return (
    <Comp size={size}>
      {children}
    </Comp>
  );
};
