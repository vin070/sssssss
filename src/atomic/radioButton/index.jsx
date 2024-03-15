import React from 'react';
import * as S from './styles'

const RadioButton = ({ label, value, onChange }) => (
  <S.Label>
    <S.RadioInput type="radio" checked={value} onChange={onChange} />
    {label}
  </S.Label>
);

export default RadioButton;