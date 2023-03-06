import { Text } from '../Text';

import { CheckBoxProps } from './types';
import * as S from './styles';
import { useState } from 'react';
import { CheckIcon } from '../../icons/CheckIcon';

export const CheckBox: React.FC<CheckBoxProps> = ({ label, checked = false }) => {
  const [isChecked, setIsChecked] = useState(checked);

  function handleToggleChecked() {
    setIsChecked(prevState => !prevState);
  }

  return (
    <S.Container
      checked={isChecked}
      onClick={handleToggleChecked}
    >
      <S.HiddedCheckBox
        checked={isChecked}
        onChange={handleToggleChecked}
      />

      <S.CheckBoxStyled checked={isChecked}>
        <div className="check-icon">
          <CheckIcon color='white' size={16} strokeWidth={4} />
        </div>
      </S.CheckBoxStyled>

      <S.LabelStyled>
        <Text size={'sm'}>
          {label}
        </Text>
      </S.LabelStyled>
    </S.Container>
  );
};
