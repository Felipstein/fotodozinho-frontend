import { InputHTMLAttributes, ReactElement } from 'react';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  leftIcon?: ReactElement;
  rightIcon?: ReactElement;
  onRightIconClick?: () => void;
}
