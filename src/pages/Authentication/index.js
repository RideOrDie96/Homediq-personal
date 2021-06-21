import React, { useState, useEffect } from "react";
//Pages
import Login from "./Login";
import Signup from "./Signup";
import Welcome from "./Welcome";
import RecoverPassword from "./RecoverPassword";
//Intl
import { FormattedMessage, injectIntl } from "react-intl";
//MUI
import { Grid } from "@material-ui/core";
//StyledComponents
import { Background } from "../../components/styledComponents/Background/Background";
import { AuthContainer } from "./Welcome/components/styledComponents/AuthContainer/AuthContainer";

const Authentication = (props) => {
  const [page, setPage] = useState("");

  const authPage = localStorage.getItem("authPage");

  const pageHandler = (param) => {
    localStorage.setItem("authPage", param);
    setPage(param);
  };

  useEffect(() => {
    setPage(authPage);
  }, [page]);

  return (
    <Background container>
      <Grid item sm />
      <Grid item sm>
        <AuthContainer>
          <Welcome page={page} pageHandler={pageHandler} />
          {(page === "login" && (
            <Login props={props} pageHandler={pageHandler} />
          )) ||
            (page === "signup" && (
              <Signup props={props} pageHandler={pageHandler} />
            )) ||
            (page === "forget" && (
              <RecoverPassword props={props} pageHandler={pageHandler} />
            ))}
        </AuthContainer>
      </Grid>
      <Grid item sm />
    </Background>
  );
};

export default injectIntl(Authentication);
