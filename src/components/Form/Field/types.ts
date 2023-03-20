import { HTMLInputTypeAttribute, ReactElement } from 'react';

export interface FieldProps {
  name: string;
  label?: string;
  type: HTMLInputTypeAttribute;
  mask?: Masker;
  placeholder?: string;
  required?: boolean;
  value?: any;
  initialValue?: any;
  onChange?: (() => void) | any;
  leftIcon?: ReactElement;
  rightIcon?: ReactElement;
  onRightIconClick?: () => void;
  errorFeedback?: string;
}

export type Masker = (value: string) => string;
