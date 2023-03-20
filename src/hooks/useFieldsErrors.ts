import { useCallback, useState } from 'react';

export interface FieldErrorFeedback {
  fieldName: string;
  feedback: string;
}

export function useFieldsErrors() {
  const [fieldsErrors, setFieldsErrors] = useState<FieldErrorFeedback[]>([]);

  function setError({ fieldName, feedback }: FieldErrorFeedback) {
    setFieldsErrors(prevState => {
      const index = prevState.findIndex(field => field.fieldName === fieldName);

      if(index !== -1) {
        prevState.splice(index, 1);
      }

      return [...prevState, { fieldName, feedback }];
    });
  }

  const removeError = useCallback((fieldName: string) => {
    setFieldsErrors(prevState => prevState.filter(field => field.fieldName !== fieldName));
  }, []);

  const getErrorFeedback = useCallback((fieldName: string) => {
    const fieldError = fieldsErrors.find(field => field.fieldName === fieldName);

    return fieldError?.feedback;
  }, [fieldsErrors]);

  return {
    fieldsErrors,
    hasErrors: fieldsErrors.length > 0,
    setError,
    removeError,
    getErrorFeedback,
  };
}
