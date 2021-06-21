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

const RecoverPassword = (props) => {
  const { pageHandler } = props;
  const authPage = localStorage.getItem("authPage");
  //Input
  const [email, setEmail] = useState("");
  //Loader
  const [isLoading, setIsLoading] = useState(false);
  //Errors
  const [errorEmail, setErrorEmail] = useState(false);
  const [errorEmailSwitch, setErrorEmailSwitch] = useState("");

  const recoverData = {
    email,
  };

  const errors = {
    emptyEmail: props.intl.formatMessage({ id: "emptyEmail" }),
    wrongEmail: props.intl.formatMessage({ id: "wrongEmail" }),
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
  };

  return (
    <FormContainer noValidate onSubmit={handleSubmit}>
      <Header className="formHeader">
        <FormattedMessage id="recoverPassword" />
      </Header>
      <Text className="formText">
        <FormattedMessage id="recoverPasswordSubTextPart1" />
        <FormattedMessage id="recoverPasswordSubTextPart2" />
      </Text>
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
      <Text className="formText">
        <FormattedMessage id="recoverPasswordSubTextPart3" />
        <br />
        <CustomLink onClick={() => pageHandler("login")}>
          <FormattedMessage id="recoverPasswordSubTextPart4" />
        </CustomLink>
        <FormattedMessage id="dot" />
      </Text>
    </FormContainer>
  );
};

export default injectIntl(RecoverPassword);
