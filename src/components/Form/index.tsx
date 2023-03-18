import React, { isValidElement, useCallback, useMemo, useState } from 'react';

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

  const handleInputChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
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
  }, [fields, setError, removeError]);

  const handleCheckboxChange = useCallback((fieldName: string, newState: boolean) => {
    setFieldValue(fieldName, newState);
  }, []);

  const childrenMapped = useMemo(() => {

    const childrensMapped = React.Children.toArray(children).map(child => {

      if(isValidElement(child) && child.type === Field) {

        const fieldName = child.props.name;

        const fieldProps = fields.find(field => field.name === fieldName);

        if(!fieldProps) {
          return child;
        }

        const fieldWithPropsInjected = (
          <Field
            key={fieldName}
            value={values[fieldName]}
            onChange={
              fieldProps.type === 'checkbox'
                ? (newState: boolean) => handleCheckboxChange(fieldName, newState)
                : handleInputChange
            }
            errorFeedback={getErrorFeedback(fieldName)}
            {...fieldProps}
          />
        );

        return fieldWithPropsInjected;
      }

      return child;
    });

    return childrensMapped;
  }, [fields, values, handleInputChange, handleCheckboxChange, getErrorFeedback, children]);

  return (
    <form noValidate onSubmit={handleSubmit}>
      {childrenMapped}
    </form>
  );
};
