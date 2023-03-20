import { useState } from 'react';

import { Text } from '../Text';
import { CheckIcon } from '../../icons/CheckIcon';

import { CheckBoxProps } from './types';
import * as S from './styles';

export const CheckBox: React.FC<CheckBoxProps> = ({ name, label, checked = false, onChange }) => {
  const [isChecked, setIsChecked] = useState(checked);

  function handleToggleChecked() {
    if(onChange) {
      onChange(!isChecked);
    }

    setIsChecked(prevState => !prevState);
  }

  return (
    <S.Container
      checked={isChecked}
      onClick={handleToggleChecked}
    >
      <S.HiddedCheckBox
        name={name}
        checked={isChecked}
        onChange={handleToggleChecked}
      />

      <S.CheckBoxStyled htmlFor={name} checked={isChecked}>
        <div className="check-icon">
          <CheckIcon color='white' size={16} strokeWidth={4} />
        </div>
      </S.CheckBoxStyled>

      {label && (
        <S.LabelStyled htmlFor={name}>
          <Text size='sm'>
            {label}
          </Text>
        </S.LabelStyled>
      )}
    </S.Container>
  );
};
