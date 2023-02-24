import * as S from './styles';
import { TextProps } from './types';

export const Text: React.FC<TextProps> = ({ asChild = false, size = 'md', weight = 400, children }) => {
  const Comp = asChild ? S.SlotStyled : S.SpanStyled;

  return (
    <Comp size={size} weight={weight}>
      {children}
    </Comp>
  );
};
