import styled from "styled-components";

export const FilterContainer = styled.div`
  padding: 20px;
  background: #fff;
  border-radius: 8px;
  box-shadow: rgba(56, 84, 112, 0.3) 0px 2px 4px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const Airline = styled.div``;

export const PriceRange = styled.div``;

export const SeatClass = styled.div``;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;

  h3 {
    img {
      vertical-align: middle;
    }
  }
`;

export const Footer = styled.div`
  text-align: end;
`;

export const Separator = styled.div`
  border: 1px solid #dfdddd;
  opacity: 0.6;
  margin: 5px 0px;
`;

export const Reset = styled.h4`
  color: #106ec5;
  cursor: pointer;
`;
