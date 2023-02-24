import { ReactNode } from 'react';

interface TextProps {
  children: ReactNode;
}

export const Text: React.FC<TextProps> = ({ children }) => {

  return (
    <p>
      {children}
    </p>
  );
};
