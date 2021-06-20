import { Typography } from "@material-ui/core";

import styled from "styled-components";

export const Text = styled(Typography)`
  &.formText {
    font-size: 15px;
    color: grey;
    align-self: center;
    width: 350px;
    text-align: center;
  }

  &.welcomeText {
    font-size: 15px;
    color: #fff;
  }
`;
