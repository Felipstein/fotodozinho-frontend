import * as S from './styles';
import { TextProps } from './types';

export const Text: React.FC<TextProps> = ({ asChild = false, size = 'md', children }) => {
  const Comp = asChild ? S.SlotStyled : S.SpanStyled;

  return (
    <Comp size={size}>
      {children}
    </Comp>
  );
};
