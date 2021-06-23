import { MenuItem } from "@material-ui/core";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const MenuContainer = styled.ul`
  display: flex;
  padding-left: 20%;
  background-color: #fff;
`;

export const ListItem = styled.li`
  display: flex;
  height: 60px;
  align-items: center;
  margin: 0 0.8em;
`;

export const ListLink = styled(Link)`
  text-decoration: none;
  color: #2f2f2f;
  font-size: 15px;
  font-weight: 600;
  display: flex;
  flex-direction: column;
  z-index: 1400;

  &:after {
    width: 0px;
    content: "";
    border-bottom: 0.5px solid #fff;
    transition: all 300ms ease-in-out;
  }

  &:hover:after {
    width: 100%;
    border-bottom: 0.5px solid #f8025c;
  }
`;

export const Item = styled(MenuItem)`
  font-size: 15px !important;
  &.parent {
    color: #f8025c !important;
  }
  &.invisible {
    color: white !important;
  }
`;
