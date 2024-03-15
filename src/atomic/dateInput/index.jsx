import React from "react";
import { InputLabel, InputContainer } from "../input/styles";
import * as S from './styles'

const DateInput = ({
  label,
  onChange,
  defaultValue,
  placeholder,
  required,
}) => {

  return (
    <InputContainer>
      <InputLabel>{label}</InputLabel>
      <S.Input
        type='date'
        defaultValue={defaultValue}
        placeholder={placeholder}
        onChange={onChange}
        required={required}
      />

    </InputContainer>
  );
};

export default DateInput;
