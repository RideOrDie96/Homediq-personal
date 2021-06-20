import React, { useState, useEffect } from "react";
//Intl
import { FormattedMessage, injectIntl } from "react-intl";
//MUI
import CircularProgress from "@material-ui/core/CircularProgress";
import Checkbox from "@material-ui/core/Checkbox";
import { FormControlLabel } from "@material-ui/core";
//StyledComponents
import { FormContainer } from "../Welcome/components/styledComponents/FormContainer/FormContainer";
import { Input } from "../../../components/styledComponents/Input/Input";
import { Header } from "../../../components/styledComponents/Header/Header";
import { SubmitForm } from "../../../components/styledComponents/SubmitForm/SubmitForm";
import { ForgotPassword } from "./components/styledComponents/ForgotPassword/ForgotPassword";
import { CheckboxContainer } from "./components/styledComponents/CheckboxContainer/CheckboxContainer";
import { ButtonContainer } from "./components/styledComponents/ButtonContainer/ButtonContainer";

const Login = (props) => {
  //Input
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [checked, setChecked] = useState(false);
  //Loader
  const [isLoading, setIsLoading] = useState(false);
  //Errors
  const [errorEmail, setErrorEmail] = useState(false);
  const [errorPassword, setErrorPassword] = useState(false);
  const [errorEmailSwitch, setErrorEmailSwitch] = useState("");
  const [errorPasswordSwitch, setErrorPasswordSwitch] = useState("");

  const loginData = {
    email,
    password,
    remeberMe: false,
  };

  const errors = {
    emptyEmail: props.intl.formatMessage({ id: "emptyEmail" }),
    emptyPassword: props.intl.formatMessage({ id: "emptyPassword" }),
    wrongEmail: props.intl.formatMessage({ id: "wrongEmail" }),
    wrongPassword: props.intl.formatMessage({ id: "wrongPassword" }),
  };

  const handleCheckbox = (event) => {
    setChecked(event.target.checked);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (email === "") {
      setErrorEmailSwitch("empty");
      setErrorEmail(true);
    } else if (email !== "stefan@email.com") {
      setErrorEmailSwitch("wrong");
      setErrorEmail(true);
    } else {
      setErrorEmailSwitch("");
      setErrorEmail(false);
    }
    if (password === "") {
      setErrorPasswordSwitch("empty");
      setErrorPassword(true);
    } else if (password !== "123456") {
      setErrorPasswordSwitch("wrong");
      setErrorPassword(true);
    } else {
      setErrorPasswordSwitch("");
      setErrorPassword(false);
    }
  };

  return (
    <FormContainer noValidate onSubmit={handleSubmit}>
      <Header className="formHeader">
        <FormattedMessage id="login" />
      </Header>
      <Input
        onChange={(event) => setEmail(event.target.value)}
        required={true}
        id="email"
        name="email"
        type="email"
        label={props.intl.formatMessage({ id: "email" })}
        error={errors.emptyEmail && errors.emptyEmail}
        helperText={
          errorEmail &&
          (errorEmailSwitch === "empty" ? errors.emptyEmail : errors.wrongEmail)
        }
      />
      <Input
        onChange={(event) => setPassword(event.target.value)}
        required={true}
        id="password"
        name="password"
        type="password"
        label={props.intl.formatMessage({ id: "password" })}
        error={errors.emptyPassword && errors.emptyPassword}
        helperText={
          errorPassword &&
          (errorPasswordSwitch === "empty"
            ? errors.emptyPassword
            : errors.wrongPassword)
        }
      />
      <CheckboxContainer>
        <FormControlLabel
          control={
            <Checkbox
              color="primary"
              onChange={handleCheckbox}
              inputProps={{ "aria-label": "primary checkbox" }}
            />
          }
          label={props.intl.formatMessage({ id: "rememberMe" })}
        />
      </CheckboxContainer>
      <ButtonContainer>
        {isLoading ? (
          <SubmitForm type="submit" variant="contained" disabled>
            <CircularProgress />
          </SubmitForm>
        ) : (
          <SubmitForm type="submit" variant="contained">
            <FormattedMessage id="submit" />
          </SubmitForm>
        )}
      </ButtonContainer>
      <ForgotPassword>
        <FormattedMessage id="forgotPassword" />
      </ForgotPassword>
    </FormContainer>
  );
};

export default injectIntl(Login);
