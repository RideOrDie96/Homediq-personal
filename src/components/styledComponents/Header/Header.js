import { Typography } from "@material-ui/core";

import styled from "styled-components";

export const Header = styled(Typography)`
  &.formHeader {
    margin: 1em 0 1em 0;
    font-size: 22px;
    color: black;
    align-self: center;
    font-weight: 600;
  }

  &.welcomeHeader {
    margin: 1em 0 0.5em 0;
    font-size: 42px;
    color: #fff;
    letter-spacing: 2px;
  }
`;
