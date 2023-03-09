import { HTMLInputTypeAttribute, ReactElement, ReactNode } from 'react';

export interface Field {
  name: string;
  label?: string;
  type: HTMLInputTypeAttribute;
  placeholder?: string;
  required: boolean;
  initialValue?: any;
  leftIcon?: ReactElement;
  rightIcon?: ReactElement;
  onRightIconClick?: () => void;
}

export interface FormProps {
  fields: Field[];
  children: ReactNode;
}
