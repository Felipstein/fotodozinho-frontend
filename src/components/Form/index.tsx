import { useState } from 'react';

import { Button } from '../../components/Button';
import { CheckBox } from '../../components/CheckBox';
import { Input } from '../../components/Input';
import { PasswordInput } from '../../components/PasswordInput';
import { useFieldsErrors } from '../../hooks/useFieldsErrors';
import { formatPhone } from '../../utils/formatPhone';
import { isEmailValid } from '../../utils/isEmailValid';
import { FormProps } from './types';

export const Form: React.FC<FormProps> = ({ fields, children }) => {
  const [values, setValues] = useState<Record<string, any>>(() => {
    const values: Record<string, any> = {};

    fields.forEach(field => {
      values[field.name] = field.initialValue ?? (field.type === 'checkbox' ? false : '');
    });

    return values;
  });

  const {
    setError,
    removeError,
    getErrorFeedback,
    hasErrors,
  } = useFieldsErrors();

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();

    console.log(values);
  }

  function setFieldValue(fieldName: string, value: any) {
    setValues(prevState => ({
      ...prevState,
      [fieldName]: value,
    }));
  }

  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    const { target } = event;

    const fieldName = target.name;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    const field = fields.find(field => field.name === fieldName);

    if(field && ['text', 'password', 'email'].includes(field?.type) && field.required) {
      if(!value) {
        setError({ fieldName, feedback: 'Campo obrigatório' });
      } else {
        removeError(fieldName);
      }
    }

    setFieldValue(fieldName, value);
  }

  console.log(values);

  function handleCheckboxChange(fieldName: string, newState: boolean) {
    setFieldValue(fieldName, newState);
  }

  return (
    <form noValidate onSubmit={handleSubmit}>
      {children}
    </form>
  );
};
