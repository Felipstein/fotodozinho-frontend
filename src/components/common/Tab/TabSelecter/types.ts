import { ReactElement } from 'react';

export interface TabSelecterProps {
  onSelect?: (value: string) => void;
  children: ReactElement | ReactElement[];
}
