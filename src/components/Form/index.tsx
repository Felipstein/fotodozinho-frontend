import React, { isValidElement, ReactElement, useMemo, useState } from 'react';

import { useFieldsErrors } from '../../hooks/useFieldsErrors';
import { Field } from './Field';

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
    fieldsErrors,
  } = useFieldsErrors();

  const childrenMapped = useMemo(() => {

    const childrensMapped = React.Children.toArray(children).map(child => {

      if(isValidElement(child) && child.type === Field) {

        const fieldProps = fields.find(field => field.name === child.props.name);

        const fieldWithPropsInjected = React.cloneElement(child as ReactElement, { ...fieldProps });

        return fieldWithPropsInjected;
      }

      return child;
    });

    return childrensMapped;
  }, [fields, children]);

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

  function handleCheckboxChange(fieldName: string, newState: boolean) {
    setFieldValue(fieldName, newState);
  }

  return (
    <form noValidate onSubmit={handleSubmit}>
      {childrenMapped}
    </form>
  );
};
