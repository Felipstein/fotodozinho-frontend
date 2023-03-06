import { useState } from 'react';
import { EyeClosedIcon } from '../../icons/EyeClosedIcon';
import { EyeIcon } from '../../icons/EyeIcon';
import { Input } from '../Input';
import { PasswordInputProps } from './types';

export const PasswordInput: React.FC<PasswordInputProps> = ({ placeholder, ...props }) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <Input
      type={showPassword ? 'text' : 'password'}
      placeholder={placeholder && (showPassword ? placeholder : '*'.repeat(placeholder.length))}
      rightIcon={showPassword ? <EyeIcon /> : <EyeClosedIcon />}
      onRightIconClick={() => setShowPassword(prevState => !prevState)}
      {...props}
    />
  );
};
