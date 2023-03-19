import { ReactNode } from 'react';
import { FieldErrorFeedback } from '../../hooks/useFieldsErrors';
import { FieldProps } from './Field/types';
export interface FormProps {
  fields: FieldProps[];
  onSubmit: (data: Record<string, any>) => Promise<void>;
  onFormStatusChange?: (isFormValid: boolean, isFormComplete: boolean, hasError: boolean, fieldsErrors: FieldErrorFeedback[]) => void;
  children: ReactNode;
}
