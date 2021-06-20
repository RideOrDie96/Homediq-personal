import React, { useState, useEffect } from "react";
//Intl
import { FormattedMessage, injectIntl } from "react-intl";
//MUI
import CircularProgress from "@material-ui/core/CircularProgress";
import Checkbox from "@material-ui/core/Checkbox";
import { FormControlLabel, Link } from "@material-ui/core";
//StyledComponents
import { FormContainer } from "../Welcome/components/styledComponents/FormContainer/FormContainer";
import { Input } from "../../../components/styledComponents/Input/Input";
import { Header } from "../../../components/styledComponents/Header/Header";
import { SubmitForm } from "../../../components/styledComponents/SubmitForm/SubmitForm";
import { ButtonContainer } from "../components/styledComponents/ButtonContainer/ButtonContainer";
import { Text } from "../../../components/styledComponents/Text/Text";

const Signup = (props) => {
  // localStorage.setItem("authPage", "signup");
  const authPage = localStorage.getItem("authPage");

  //Input
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [confirmEmail, setConfirmEmail] = useState("");
  const [password, setPassword] = useState("");
  //Loader
  const [isLoading, setIsLoading] = useState(false);
  //Errors
  const [errorEmail, setErrorEmail] = useState(false);
  const [errorPassword, setErrorPassword] = useState(false);
  const [errorEmailSwitch, setErrorEmailSwitch] = useState("");
  const [errorPasswordSwitch, setErrorPasswordSwitch] = useState("");

  const signupData = {
    firstName,
    lastName,
    email,
    confirmEmail,
    password,
  };

  const errors = {
    emptyEmail: props.intl.formatMessage({ id: "emptyEmail" }),
    emptyPassword: props.intl.formatMessage({ id: "emptyPassword" }),
    wrongEmail: props.intl.formatMessage({ id: "wrongEmail" }),
    wrongPassword: props.intl.formatMessage({ id: "wrongPassword" }),
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
        <FormattedMessage id="signup" />
      </Header>
      <Text className="formText">
        <FormattedMessage id="signupSubTextPart1" />
        <Link onClick={() => localStorage.setItem("authPage", "login")}>
          <FormattedMessage id="signupSubTextPart2" />
        </Link>
      </Text>
      <Input
        onChange={(event) => setEmail(event.target.value)}
        required={true}
        id="firstName"
        name="firstName"
        type="firstName"
        label={props.intl.formatMessage({ id: "firstName" })}
        error={errorEmailSwitch && errorEmailSwitch}
        helperText={
          errorEmail &&
          (errorEmailSwitch === "empty" ? errors.emptyEmail : errors.wrongEmail)
        }
      />
      <Input
        onChange={(event) => setPassword(event.target.value)}
        required={true}
        id="lastName"
        name="lastName"
        type="lastName"
        label={props.intl.formatMessage({ id: "lastName" })}
        error={errorPasswordSwitch && errorPasswordSwitch}
        helperText={
          errorPassword &&
          (errorPasswordSwitch === "empty"
            ? errors.emptyPassword
            : errors.wrongPassword)
        }
      />
      <Input
        onChange={(event) => setEmail(event.target.value)}
        required={true}
        id="email"
        name="email"
        type="email"
        label={props.intl.formatMessage({ id: "email" })}
        error={errorEmailSwitch && errorEmailSwitch}
        helperText={
          errorEmail &&
          (errorEmailSwitch === "empty" ? errors.emptyEmail : errors.wrongEmail)
        }
      />
      <Input
        onChange={(event) => setEmail(event.target.value)}
        required={true}
        id="email"
        name="email"
        type="email"
        label={props.intl.formatMessage({ id: "confirmEmail" })}
        error={errorEmailSwitch && errorEmailSwitch}
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
        error={errorPasswordSwitch && errorPasswordSwitch}
        helperText={
          errorPassword &&
          (errorPasswordSwitch === "empty"
            ? errors.emptyPassword
            : errors.wrongPassword)
        }
      />
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
    </FormContainer>
  );
};

export default injectIntl(Signup);
