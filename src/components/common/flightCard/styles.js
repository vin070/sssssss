import styled from "styled-components";

export const Container = styled.div`
  padding: 20px;
  background: #fff;
  border-radius: 8px;
  box-shadow: rgba(56, 84, 112, 0.3) 0px 2px 4px;
`;
export const CardRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const FlightInfo = styled.div`
  display: flex;
  justify-content: flex-start;
  gap: 20px;
  align-items: center;
  margin: 20px 0px;
`;
export const FlightIcon = styled.div`
  width: 50px;
`;
export const FlightName = styled.h3``;

export const Detail = styled.div`
`;

export const DetailWrapper = styled.div`
  display: flex;
  column-gap: 10px;
  align-items: center;
  justify-content: space-between;
`;

export const FlightClass = styled.div`
  // green , orange
  color: #fff;
  font-size: 11px;
  font-weight: 700;
  border-radius: 4px;
  background: #10c510;
  padding: 5px;
`;

export const FlightNumber = styled.div`
  color: rgb(56, 84, 112);
`;
export const DepartureTime = styled.h3``;
export const MotionLine = styled.div`
  > img {
    transform: rotate(90deg);
    vertical-align: middle;
  }
`;
export const ArrivalTime = styled.h3``;
export const Duration = styled.div`
  color: rgb(56, 84, 112);
`;
export const Source = styled.div`
  color: rgb(56, 84, 112);
`;
export const Destination = styled.div`
  color: rgb(56, 84, 112);
`;

export const Price = styled.h3`
  color: rgb(21, 26, 37);

  > img {
    vertical-align: middle;
  }
`;

export const Info = styled.div`
  border: 1px solid rgb(221, 224, 227);
  color: rgb(56, 84, 112);
  border-radius: 8px;
  font-size: 12px;
  font-weight: 500;
  font-family: Inter, sans-serif;
  padding: 5px 9px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  min-width: 85px;
  column-gap: 8px;
  text-transform: capitalize;
`;
