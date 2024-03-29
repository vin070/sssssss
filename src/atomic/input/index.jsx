import React from 'react';
import * as S from './styles.js'

const Input = ({
  type = 'text',
  label = 'Label',
  value,
  onChange,
  isDisabled = false,
  placeholder = 'Input',
  required = false
}) => {
  return (
    <S.InputContainer>
      <S.InputLabel>
        {label}
      </S.InputLabel>
      <S.InputField
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        disabled={isDisabled}
        required={required}
        aria-label='input'
      />
    </S.InputContainer>
  )
}

export default Input;