import { ReactNode } from 'react';
import { FieldErrorFeedback } from '../../hooks/useFieldsErrors';
import { FieldProps } from './Field/types';

export interface FormStatus {
  isFormValid: boolean;
  isFormComplete: boolean;
  hasErrors: boolean;
  fieldsErrors: FieldErrorFeedback[];
}

export interface FormProps {
  fields: FieldProps[];
  onSubmit: (data: Record<string, any>) => Promise<void>;
  onFormStatusChange?: (formStatus: FormStatus) => void;
  children: ReactNode;
}
