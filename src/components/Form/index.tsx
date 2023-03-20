/* eslint-disable @typescript-eslint/ban-ts-comment */
import React, {
  isValidElement,
  ReactNode,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from 'react';

import { useFieldsErrors } from '../../hooks/useFieldsErrors';
import { Field } from './Field';
import { FieldSpecificer } from './FieldSpecifier';

import { FormProps } from './types';

export const Form: React.FC<FormProps> = ({
  fields,
  onSubmit,
  onFormStatusChange,
  children,
  ...props
}) => {
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

  useEffect(() => {

    if(onFormStatusChange) {
      const isFormComplete = Object.entries(values).every(([key, value]) => {
        const field = fields.find(field => field.name === key);

        if(!field) {
          return true;
        }

        if(field.type === 'checkbox') {
          return true;
        }

        const isRequired = field.required ?? true;

        if(!isRequired) {
          return true;
        }

        return isRequired && value;
      });

      const isFormValid = isFormComplete && !hasErrors;

      onFormStatusChange({ isFormValid, isFormComplete, hasErrors, fieldsErrors });
    }

  }, [fields, values, onFormStatusChange, hasErrors, fieldsErrors]);

  async function handleSubmit(event: React.FormEvent) {
    event.preventDefault();

    await onSubmit(values);
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

    const isRequired = field?.required === undefined ? true : field.required;

    if(field && field.type !== 'checkbox' && isRequired) {
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

  const createFieldBasedOnName = useCallback((fieldName: string) => {

    const fieldProps = fields.find(field => field.name === fieldName);

    if(!fieldProps) {
      return (
        <Field
          key={fieldName}
          name={fieldName}
          type='text'
          required={false}
        />
      );
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

  }, [fields, values, handleInputChange, handleCheckboxChange, getErrorFeedback]);

  const verifyAndMapOneChildren = useCallback((children: ReactNode) => {

    if(isValidElement(children) && children.type === FieldSpecificer) {

      const fieldName = children.props.name;

      const fieldWithPropsInjected = createFieldBasedOnName(fieldName);

      return fieldWithPropsInjected;

    }

    return children;
  }, [createFieldBasedOnName]);

  const verifyAndMapArrayOfChildrens = useCallback((childrens: ReactNode[]) => {


    return childrens.map(children => {

      if(isValidElement(children)) {

        if(children.props?.children?.length > 1) {
          return verifyAndMapArrayOfChildrens(children.props.children);
        }

        return verifyAndMapOneChildren(children);
      }

      return children;
    });

  }, [verifyAndMapOneChildren]);

  const childrenMapped = useMemo(() => {

    if(React.Children.count(children) > 1) {
      return verifyAndMapArrayOfChildrens(React.Children.toArray(children));
    }

    return verifyAndMapOneChildren(children);

  }, [children, verifyAndMapOneChildren, verifyAndMapArrayOfChildrens]);

  return (
    <form
      noValidate
      onSubmit={handleSubmit}
      {...props}
    >
      {childrenMapped}
    </form>
  );
};
