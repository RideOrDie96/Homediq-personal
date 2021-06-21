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
import { CustomLink } from "../components/styledComponents/CustomLink/CustomLink";

const Signup = (props) => {
  const { pageHandler } = props;
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
  const [errorFirstName, setErrorFirstName] = useState(false);
  const [errorLastName, setErrorLastName] = useState(false);
  const [errorEmail, setErrorEmail] = useState(false);
  const [errorConfirmEmail, setErrorConfirmEmail] = useState(false);
  const [errorPassword, setErrorPassword] = useState(false);
  const [errorFirstNameSwitch, setErrorFirstNameSwitch] = useState("");
  const [errorLastNameSwitch, setErrorLastNameSwitch] = useState("");
  const [errorEmailSwitch, setErrorEmailSwitch] = useState("");
  const [errorConfirmEmailSwitch, setErrorConfirmEmailSwitch] = useState("");
  const [errorPasswordSwitch, setErrorPasswordSwitch] = useState("");

  const signupData = {
    firstName,
    lastName,
    email,
    confirmEmail,
    password,
  };

  const errors = {
    emptyFirstName: props.intl.formatMessage({ id: "emptyFirstName" }),
    emptyLastName: props.intl.formatMessage({ id: "emptyLastName" }),
    emptyEmail: props.intl.formatMessage({ id: "emptyEmail" }),
    emptyConfirmEmail: props.intl.formatMessage({ id: "emptyConfirmEmail" }),
    emptyPassword: props.intl.formatMessage({ id: "emptyPassword" }),
    noMatchEmail: props.intl.formatMessage({ id: "noMatchEmail" }),
    passwordLength: props.intl.formatMessage({ id: "passwordLength" }),
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (firstName === "") {
      setErrorFirstNameSwitch("empty");
      setErrorFirstName(true);
    } else {
      setErrorFirstNameSwitch("");
      setErrorFirstName(false);
    }
    if (lastName === "") {
      setErrorLastNameSwitch("empty");
      setErrorLastName(true);
    } else {
      setErrorLastNameSwitch("");
      setErrorLastName(false);
    }
    if (email === "") {
      setErrorEmailSwitch("empty");
      setErrorEmail(true);
    } else {
      setErrorEmailSwitch("");
      setErrorEmail(false);
    }
    if (email !== "" && confirmEmail === "") {
      setErrorConfirmEmailSwitch("empty");
      setErrorConfirmEmail(true);
    } else if (confirmEmail !== email) {
      setErrorConfirmEmailSwitch("notMatch");
      setErrorConfirmEmail(true);
    } else {
      setErrorConfirmEmailSwitch("");
      setErrorConfirmEmail(false);
    }
    if (password === "") {
      setErrorPasswordSwitch("empty");
      setErrorPassword(true);
    } else if (password.length < 7) {
      setErrorPasswordSwitch("length");
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
        <CustomLink onClick={() => pageHandler("login")}>
          <FormattedMessage id="signupSubTextPart2" />
        </CustomLink>
        <FormattedMessage id="dot" />
      </Text>
      <Input
        onChange={(event) => setFirstName(event.target.value)}
        required={true}
        id="firstName"
        name="firstName"
        type="firstName"
        label={props.intl.formatMessage({ id: "firstName" })}
        error={errorFirstNameSwitch && errorFirstNameSwitch}
        helperText={
          errorFirstName &&
          errorFirstNameSwitch === "empty" &&
          errors.emptyFirstName
        }
      />
      <Input
        onChange={(event) => setLastName(event.target.value)}
        required={true}
        id="lastName"
        name="lastName"
        type="lastName"
        label={props.intl.formatMessage({ id: "lastName" })}
        error={errorLastNameSwitch && errorLastNameSwitch}
        helperText={
          errorLastName &&
          errorLastNameSwitch === "empty" &&
          errors.emptyLastName
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
          errorEmail && errorEmailSwitch === "empty" && errors.emptyEmail
        }
      />
      <Input
        onChange={(event) => setConfirmEmail(event.target.value)}
        required={true}
        id="email"
        name="email"
        type="email"
        label={props.intl.formatMessage({ id: "confirmEmail" })}
        error={errorConfirmEmailSwitch && errorConfirmEmailSwitch}
        helperText={
          errorConfirmEmail &&
          (errorConfirmEmailSwitch === "empty"
            ? errors.emptyConfirmEmail
            : errors.noMatchEmail)
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
          errorPassword && errorPasswordSwitch === "empty"
            ? errors.emptyPassword
            : errors.passwordLength
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
