import styled from "styled-components";

export const Content = styled.div`
  display: flex;
  width: 100%;
  margin-top: 212.53px;
  margin-bottom: 20px;
  height: calc(100vh - 212.53px);
`;

export const Wrapper = styled.div`
  width: 100%;
  position: fixed;
  top: 0;
  z-index: 10;
  background: aliceblue;
`;

export const FilterWrapper = styled.div`
  width: 25%;
  margin: 0 20px 20px 20px;
  height: 100%;
  overflow-y: scroll;
`;

export const CardWrapper = styled.div`
  width: 71%;
  margin: 0 20px 20px 20px;
  display: flex;
  flex-direction: column;
  row-gap: 20px;
  height: 100%;
  overflow-y: scroll;
`;
