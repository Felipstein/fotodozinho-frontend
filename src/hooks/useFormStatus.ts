import { useCallback, useState } from 'react';
import { FormStatus } from '../components/Form/types';
import { FieldErrorFeedback } from './useFieldsErrors';

export function useFormStatus() {
  const [isFormValid, setIsFormValid] = useState(false);
  const [isFormComplete, setIsFormComplete] = useState(false);
  const [hasErrors, setHasErrors] = useState(false);
  const [fieldsErrors, setFieldsErrors] = useState<FieldErrorFeedback[]>([]);

  const handleFormStatusChange = useCallback(({
    isFormValid,
    isFormComplete,
    hasErrors,
    fieldsErrors,
  }: FormStatus) => {
    setIsFormValid(isFormValid);
    setIsFormComplete(isFormComplete);
    setHasErrors(hasErrors);
    setFieldsErrors(fieldsErrors);
  }, []);

  return {
    handleFormStatusChange,
    isFormValid,
    isFormComplete,
    hasErrors,
    fieldsErrors,
  };
}
