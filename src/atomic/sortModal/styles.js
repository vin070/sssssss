import styled from "styled-components";

export const ModalContainer = styled.div`
  width: fit-content;
  height: fit-content;
  position: absolute;
  top:180px;
  z-index: 2
  display: flex;
  justify-content: space-evenly;
  align-item: center;
  flex-wrap: wrap;
  background: #FFF;
  border-radius: 4px;
  box-shadow: rgba(56, 84, 112, 0.3) 0px 2px 4px;
  padding: 10px;
`;

export const Separator = styled.div`
  border: 1px solid #dfdddd;
  opacity: 0.6;
  margin: 5px 0px;
`;
