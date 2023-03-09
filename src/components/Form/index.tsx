import { HTMLInputTypeAttribute, useState } from 'react';

import { Button } from '../../components/Button';
import { CheckBox } from '../../components/CheckBox';
import { Input } from '../../components/Input';
import { PasswordInput } from '../../components/PasswordInput';
import { useFieldsErrors } from '../../hooks/useFieldsErrors';
import { formatPhone } from '../../utils/formatPhone';
import { isEmailValid } from '../../utils/isEmailValid';

interface Field {
  name: string;
  label?: string;
  type: HTMLInputTypeAttribute;
  placeholder?: string;
  required: boolean;
}

export const Form: React.FC = () => {
  const [fields, setFields] = useState<Field[]>([
    {
      name: 'name',
      label: 'Nome',
      type: 'text',
      required: true,
    },
    {
      name: 'email',
      label: 'E-mail',
      type: 'email',
      placeholder: 'exemplo@exemplo.com',
      required: true,
    },
    {
      name: 'phone',
      label: 'Telefone',
      type: 'text',
      required: false,
    },
    {
      name: 'password',
      label: 'Senha',
      type: 'password',
      placeholder: 'Sua senha aqui',
      required: true,
    },
    {
      name: 'confirmPassword',
      label: 'Confirmar senha',
      type: 'password',
      placeholder: 'Confirme sua senha aqui',
      required: true,
    },
    {
      name: 'notifyServicesByEmail',
      label: 'Desejo ser notificado por e-mail sobre as atualizações dos meus serviços e pedidos.',
      type: 'checkbox',
      required: true,
    },
    {
      name: 'acceptTerms',
      label: 'Aceito os Termos de Serviço e Uso da Aplicação Foto do Zinho.',
      type: 'checkbox',
      required: true,
    },
  ]);

  const [values, setValues] = useState<>();

  const {
    setError,
    removeError,
    getErrorFeedback,
    hasErrors,
  } = useFieldsErrors();

  const isFormValid = (name && email && password && confirmPassword && acceptTerms) && !hasErrors;

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();

    console.log({ name, email, phone, password, confirmPassword, notifyServicesByEmail, acceptTerms });
  }

  function handleNameChange(event: React.ChangeEvent<HTMLInputElement>) {
    const { value } = event.target;

    if(!value) {
      setError({ fieldName: 'name', feedback: 'Nome é obrigatório' });
    } else {
      removeError('name');
    }

    setName(value);
  }

  function handleEmailChange(event: React.ChangeEvent<HTMLInputElement>) {
    const { value } = event.target;

    if(!value) {
      setError({ fieldName: 'email', feedback: 'E-mail é obrigatório' });
    } else if(!isEmailValid(value)) {
      setError({ fieldName: 'email', feedback: 'E-mail inválido' });
    } else {
      removeError('email');
    }

    setEmail(value);
  }

  function handlePhoneChange(event: React.ChangeEvent<HTMLInputElement>) {
    const { value } = event.target;

    setPhone(formatPhone(value));
  }

  function handlePasswordChange(event: React.ChangeEvent<HTMLInputElement>) {
    const { value } = event.target;

    if(!value) {
      setError({ fieldName: 'password', feedback: 'Senha é obrigatória' });
    } else if(value.length < 8) {
      setError({ fieldName: 'password', feedback: 'Sua senha deve ter no mínimo 8 caracteres' });
    } else {
      removeError('password');
    }

    setPassword(value);
  }

  function handleConfirmPasswordChange(event: React.ChangeEvent<HTMLInputElement>) {
    const { value } = event.target;

    if(!value) {
      setError({ fieldName: 'confirmPassword', feedback: 'Confirmar senha é obrigatória' });
    } else if(password !== value) {
      setError({ fieldName: 'confirmPassword', feedback: 'As senhas não coincidem' });
    } else {
      removeError('confirmPassword');
    }

    setConfirmPassword(value);
  }

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
              value={password}
              onChange={handlePasswordChange}
              errorFeedback={getErrorFeedback('password')}
            />
          );
        }
      })}
      <Input
        label='Nome *'
        name='name'
        type='text'
        value={name}
        onChange={handleNameChange}
        errorFeedback={getErrorFeedback('name')}
      />

      <Input
        label='E-mail *'
        name='email'
        type='email'
        placeholder='exemplo@gmail.com'
        value={email}
        onChange={handleEmailChange}
        errorFeedback={getErrorFeedback('email')}
      />

      <Input
        label='Telefone'
        name='phone'
        type='text'
        value={phone}
        onChange={handlePhoneChange}
        errorFeedback={getErrorFeedback('phone')}
      />

      <PasswordInput
        label='Senha *'
        name='password'
        placeholder='Sua senha aqui'
        value={password}
        onChange={handlePasswordChange}
        errorFeedback={getErrorFeedback('password')}
      />

      <PasswordInput
        label='Confirmar senha *'
        name='confirmPassword'
        placeholder='Confirme sua senha aqui'
        value={confirmPassword}
        onChange={handleConfirmPasswordChange}
        errorFeedback={getErrorFeedback('confirmPassword')}
      />

      <CheckBox
        label='Desejo ser notificado por e-mail sobre as atualizações dos meus serviços e pedidos.'
        checked={notifyServicesByEmail}
        onChange={setNotifyServicesByEmail}
      />

      <CheckBox
        label='Aceito os Termos de Serviço e Uso da Aplicação Foto do Zinho.'
        checked={acceptTerms}
        onChange={setAcceptTerms}
      />

      <Button
        type='submit'
        disabled={!isFormValid}
      >
        Cadastrar
      </Button>
    </form>
  );
};
