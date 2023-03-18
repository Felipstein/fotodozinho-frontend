import { HTMLInputTypeAttribute, ReactElement } from 'react';

export interface Field {
  name: string;
  label?: string;
  type: HTMLInputTypeAttribute;
  placeholder?: string;
  required: boolean;
  value?: any;
  initialValue?: any;
  onChange?: () => void;
  leftIcon?: ReactElement;
  rightIcon?: ReactElement;
  onRightIconClick?: () => void;
  errorFeedback?: string;
}
