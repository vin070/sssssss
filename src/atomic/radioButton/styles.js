import styled from "styled-components";

export const Label = styled.label`
  display: flex;
  column-gap: 10px;
  margin: 8px;
`;

export const RadioInput = styled.input`
  ::after {
    background-color: black;
  }
  :checked:after {
    background-color: black;
  }
`;
