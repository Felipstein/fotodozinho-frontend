import { ReactNode } from 'react';
import { Field } from './Field/types';

export interface FormProps {
  fields: Field[];
  children: ReactNode;
}
