import styled from "styled-components";

export const FormContainer = styled.form`
  margin: 20px 20px 20px 20px;
  background: #fff;
  height: fit-content;
  display: flex;
  column-gap: 40px;
  padding: 20px;
  border-radius: 8px;
`;

export const Source = styled.div`
  width: 250px;
`;

export const DateInputWrapper = styled(Source)``;

export const SourceInput = styled.div``;

export const Destination = styled(Source)``;

export const ButtonWrapper = styled.div`
  height: 40px;
  align-self: end;
`;

export const DestinationInput = styled.div``;

export const SortByWrapper = styled.div`
    display: flex;
    justify-content:center;
    align-items: center;
    gap: 4px;
    padding: 11px;
    width: 88px;
    border: 1px solid #dfdddd;
    border-radius: 2px;
    text-align: center
    position: relative;
    align-self: end;
`;

export const SortBy = styled.div`
    width: 100%;
    display: flex;
    justify-content:center;
    align-items: center;
    cursor: pointer;
`;
export const DropDown = styled.img``;
