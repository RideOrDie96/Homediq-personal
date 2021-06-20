import React, { useState, useEffect } from "react";
//Pages
import Login from "./Login";
import Signup from "./Signup";
import Welcome from "./Welcome";
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

  useEffect(() => {
    setPage(authPage);
    console.log("proslo");
  }, [authPage]);

  return (
    <Background container>
      <Grid item sm />
      <Grid item sm>
        <AuthContainer>
          <Welcome page={page} />
          {page === "login" ? (
            <Login props={props} />
          ) : (
            <Signup props={props} />
          )}
        </AuthContainer>
      </Grid>
      <Grid item sm />
    </Background>
  );
};

export default injectIntl(Authentication);
