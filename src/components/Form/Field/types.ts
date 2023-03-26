import { HTMLInputTypeAttribute, ReactElement } from 'react';
import { regex } from '../../../utils/regex-provider';

export interface FieldProps {
  name: string;
  label?: string;
  type: HTMLInputTypeAttribute;
  mask?: Masker;
  placeholder?: string;
  required?: boolean;
  value?: any;
  initialValue?: any;
  validator?: Validator;
  onChange?: (() => void) | any;
  leftIcon?: ReactElement;
  rightIcon?: ReactElement;
  onRightIconClick?: () => void;
  errorFeedback?: string;
}

export type Masker = (value: string) => string;

export type ContextInjecter = (values: Record<string, any>, currentFieldValue: any) => boolean;

export interface ValidatorType<T> {
  value: T;
  errorFeedback?: string;
}

export interface Validator {
  min?: ValidatorType<number>;
  max?: ValidatorType<number>;
  minLength?: ValidatorType<number>;
  maxLength?: ValidatorType<number>;
  matchesRegex?: ValidatorType<RegExp>;
  byContext?: ValidatorType<ContextInjecter>;
}

export const validations = {
  email: {
    matchesRegex: {
      value: regex.email,
      errorFeedback: 'E-mail inválido',
    },
  },
  password: {
    matchesRegex: {
      value: /^(?=.*\d)(?=.*[A-Z])(?=.*[^\w\d\s:])([^\s]){8,16}$/,
      errorFeedback: 'Sua senha deve possuir pelo menos 1 número, 1 letra maiúscula e 1 símbolo',
    },
    minLength: {
      value: 8,
      errorFeedback: 'Sua senha deve possuir no mínimo 8 caracteres',
    },
  },
};
