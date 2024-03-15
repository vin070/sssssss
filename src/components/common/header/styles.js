import styled from "styled-components";

export const NavBar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #fff;
  padding: 10px 25px;
  box-shadow: 0px 0px 6px 3px #f9f9f9;
`;
export const CompanyLogo = styled.div`
  display: flex;
  column-gap: 10px;
  align-items: center;
`;

export const Image = styled.img`
  width: 50px;
  vertical-align: middle;
`;

export const Name = styled.div`
  font-size: 32px;
  font-weight: 700;
  opacity: 0.8;
  font-style: italic;
  font-family: auto;
`;

export const NavLink = styled.div`
  justify-self: end;
  > a {
    margin-left: 100px;
    text-decoration: none;
    color: #000;
  }
  a:hover {
    color: #19bae5;
  }
  a:active {
    color: #19bae5;
  }
`;

export const UserProfile = styled.div`
  cursor: pointer;
`;
