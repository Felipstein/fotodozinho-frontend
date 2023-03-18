import { ReactNode } from 'react';
import { FieldProps } from './Field/types';
export interface FormProps {
  fields: FieldProps[];
  onSubmit: (data: Record<string, any>) => Promise<void>;
  children: ReactNode;
}
