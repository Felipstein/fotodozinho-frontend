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
  }

  function handleInputChange(event: React.ChangeEvent) {
    console.log(event.target);
  }

  function handleCheckboxChange(fieldName: string, newState: boolean) {

  }

  // function handleNameChange(event: React.ChangeEvent<HTMLInputElement>) {
  //   const { value } = event.target;

  //   if(!value) {
  //     setError({ fieldName: 'name', feedback: 'Nome é obrigatório' });
  //   } else {
  //     removeError('name');
  //   }

  //   setName(value);
  // }

  return (
    <form noValidate onSubmit={handleSubmit}>
      {fields.map(field => {
        if(field.type === 'password') {
          return (
            <PasswordInput
              key={field.name}
              label={field.required ? `${field.label} *` : field.label}
              name={field.name}
              placeholder={field.placeholder}
              leftIcon={field.leftIcon}
              value={values[field.name]}
              onChange={handleInputChange}
              errorFeedback={getErrorFeedback(field.name)}
            />
          );
        }

        if(field.type === 'checkbox') {
          return (
            <CheckBox
              key={field.name}
              label={field.label}
              name={field.name}
              checked={values[field.name]}
              onChange={(newState) => handleCheckboxChange(field.name, newState)}
            />
          );
        }

        return (
          <Input
            key={field.name}
            label={field.required ? `${field.label} *` : field.label}
            type={field.type}
            name={field.name}
            placeholder={field.placeholder}
            leftIcon={field.leftIcon}
            rightIcon={field.rightIcon}
            onRightIconClick={field.onRightIconClick}
            value={values[field.name]}
            onChange={handleInputChange}
            errorFeedback={getErrorFeedback(field.name)}
          />
        );
      })}
    </form>
  );
};
