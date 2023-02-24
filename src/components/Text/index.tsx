import { Slot } from '@radix-ui/react-slot';
import { ReactNode } from 'react';

interface TextProps {
  asChild?: boolean;
  children: ReactNode;
}

export const Text: React.FC<TextProps> = ({ asChild = false, children }) => {
  const Comp = asChild ? Slot : 'span';

  return (
    <Comp>
      {children}
    </Comp>
  );
};
