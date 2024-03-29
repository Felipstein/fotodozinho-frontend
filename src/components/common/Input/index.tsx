import React, { useRef, useState } from 'react';

import { Text } from '../Text';

import { InputProps } from './types';
import * as S from './styles';
import { WarnIcon } from '../../../icons/WarnIcon';

export const Input: React.FC<InputProps> = ({ label, leftIcon, rightIcon, onRightIconClick, name, errorFeedback, ...props }) => {
  const [isFocused, setIsFocused] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  function handleRightIconClick() {
    if(onRightIconClick) {
      onRightIconClick();
    } else {
      if(inputRef.current) {
        inputRef.current.focus();
      }
    }
  }

  function handleLeftIconClick() {
    if(inputRef.current) {
      inputRef.current.focus();
    }
  }

  return (
    <S.Container>
      {(label && name) && (
        <S.LabelStyled htmlFor={name}>
          <Text>
            {label}
          </Text>
        </S.LabelStyled>
      )}
      <S.FieldBox isFocused={isFocused} hasError={Boolean(errorFeedback)}>
        {leftIcon && (
          <S.LeftIconContainer onClick={handleLeftIconClick}>
            {React.cloneElement(leftIcon, { size: '2.7rem' })}
          </S.LeftIconContainer>
        )}
        <S.InputStyled
          ref={inputRef}
          name={name}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          {...props}
        />
        {rightIcon && (
          <S.RightIconContainer
            role={onRightIconClick ? 'button' : 'none'}
            hasAction={Boolean(onRightIconClick)}
            onClick={handleRightIconClick}
          >
            {React.cloneElement(rightIcon, { size: '2.7rem' })}
          </S.RightIconContainer>
        )}
      </S.FieldBox>
      {errorFeedback && (
        <S.ErrorFeedbackContainer>
          <WarnIcon size={18} />
          <Text size='sm' weight='500'>
            {errorFeedback}
          </Text>
        </S.ErrorFeedbackContainer>
      )}
    </S.Container>
  );
};
