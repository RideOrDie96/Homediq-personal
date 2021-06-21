import styled from "styled-components";

export const NavbarShape = styled.div`
  height: 50px;
  display: flex;
  align-items: center;
  margin-top: 5px;
  margin-left: 25px;
  &.left {
    width: 55%;
    margin-left: -25px;
    background-color: #fff;
    z-index: 999;
  }
  &.right {
    width: 40%;
  }
`;
