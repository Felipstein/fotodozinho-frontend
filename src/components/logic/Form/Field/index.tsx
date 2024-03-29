import { CheckBox } from '../../../common/CheckBox';
import { Input } from '../../../common/Input';
import { PasswordInput } from '../../../common/PasswordInput';

import { FieldProps } from './types';

export const Field: React.FC<FieldProps> = ({
  name,
  type,
  required = true,
  placeholder,
  value,
  onChange,
  label,
  leftIcon,
  rightIcon,
  onRightIconClick,
  errorFeedback,
}) => {

  if(type === 'password') {
    return (
      <PasswordInput
        key={name}
        label={required ? `${label} *` : label}
        name={name}
        placeholder={placeholder}
        leftIcon={leftIcon}
        value={value}
        onChange={onChange}
        errorFeedback={errorFeedback}
      />
    );
  }

  if(type === 'checkbox') {
    return (
      <CheckBox
        key={name}
        label={label}
        name={name}
        checked={value}
        onChange={onChange}
      />
    );
  }

  return (
    <Input
      key={name}
      label={required ? `${label} *` : label}
      type={type}
      name={name}
      placeholder={placeholder}
      leftIcon={leftIcon}
      rightIcon={rightIcon}
      onRightIconClick={onRightIconClick}
      value={value}
      onChange={onChange}
      errorFeedback={errorFeedback}
    />
  );

};
