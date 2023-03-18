import { ReactNode } from 'react';
import { FieldProps } from './Field/types';

export interface FormProps {
  fields: FieldProps[];
  children: ReactNode;
}
