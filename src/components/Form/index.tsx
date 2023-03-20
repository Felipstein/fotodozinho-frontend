/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable @typescript-eslint/ban-ts-comment */
import React, {
  isValidElement,
  ReactElement,
  ReactNode,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from 'react';

import { useFieldsErrors } from '../../hooks/useFieldsErrors';
import { Field } from './Field';
import { Masker, Validator } from './Field/types';
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

  const [masks] = useState<Record<string, Masker>>(() => {
    const masks: Record<string, Masker> = {};

    fields.filter(field => !!field.mask).forEach(field => {
      masks[field.name] = field.mask!;
    });

    return masks;
  });

  const [validators] = useState<Record<string, Validator>>(() => {
    const validators: Record<string, Validator> = {};

    fields.filter(field => !!field.validator).forEach(field => {
      validators[field.name] = field.validator!;
    });

    return validators;
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

    let finalValue = value;

    if(field?.type !== 'checkbox') {

      const isRequired = field?.required === undefined ? true : field.required;

      const validator = validators[fieldName];

      let noErrorsFound = true;

      label: {

        if(isRequired && !value) {
          setError({ fieldName, feedback: 'Campo obrigatório' });
          noErrorsFound = false;
          break label;
        }

        if(validator) {

          if(typeof value === 'number') {

            if(validator.max != undefined && value > validator.max.value) {
              setError({
                fieldName,
                feedback: validator.max.errorFeedback || `Valor máximo (${validator.max}) excedido`,
              });

              noErrorsFound = false;
              break label;
            }

            if(validator.min != undefined && value < validator.min) {
              setError({
                fieldName,
                feedback: validator.min.errorFeedback || `Valor mínimo (${validator.max}) excedido`,
              });

              noErrorsFound = false;
              break label;
            }
          }

          if(typeof value === 'string') {
            if(validator.maxLength != undefined && value.length > validator.maxLength.value) {
              setError({
                fieldName,
                feedback: validator.maxLength.errorFeedback || `Tamanho máximo de caracteres (${validator.max}) excedido`,
              });

              noErrorsFound = false;
              break label;
            }

            if(validator.minLength != undefined && value.length < validator.minLength.value) {
              setError({
                fieldName,
                feedback: validator.minLength.errorFeedback || `Tamanho mínimo de caracteres (${validator.max}) excedido`,
              });

              noErrorsFound = false;
              break label;
            }

            if(validator.matchesRegex && !validator.matchesRegex.value.test(value)) {
              setError({
                fieldName,
                feedback: validator.matchesRegex.errorFeedback || 'Formato inválido',
              });

              noErrorsFound = false;
              break label;
            }
          }
        }
      }

      if(noErrorsFound) {
        removeError(fieldName);
      }

      const masker = masks[fieldName];
      if(masker && typeof finalValue === 'string') {
        finalValue = masker(finalValue);
      }
    }

    setFieldValue(fieldName, finalValue);
  }, [fields, masks, validators, setError, removeError]);

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

  const mapChildren = useCallback((children: ReactNode): ReactNode => {
    return React.Children.map(children, (child) => {

      if(isValidElement(child)) {

        if(child.type === FieldSpecificer) {
          const fieldName = child.props.name;

          return createFieldBasedOnName(fieldName);
        }

        if(child.props?.children) {
          return React.cloneElement(child as ReactElement, {
            children: mapChildren(child.props.children),
          });
        }
      }

      return child;
    });
  }, [createFieldBasedOnName]);

  const childrenMapped = useMemo(() => mapChildren(children), [children, mapChildren]);

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
