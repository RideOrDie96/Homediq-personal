import { Typography } from "@material-ui/core";

import styled from "styled-components";

export const Text = styled(Typography)`
  &.formText {
    font-size: 22px;
    color: black;
    align-self: center;
    font-weight: 600;
  }

  &.welcomeText {
    font-size: 15px;
    color: #fff;
  }
`;
