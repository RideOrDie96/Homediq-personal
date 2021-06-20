import React, { useState, useEffect } from "react";
//Intl
import { FormattedMessage, injectIntl } from "react-intl";
//MUI
//StyledComponents
import { WelcomeContainer } from "./components/styledComponents/WelcomeContainer/WelcomeContainer";
import { LogoContainer } from "./components/styledComponents/LogoContainer/LogoContainer";
import { Header } from "../../../components/styledComponents/Header/Header";
import { Text } from "../../../components/styledComponents/Text/Text";
//Icons
import { MainLogo } from "../../../assets/logos/mainLogo";

const Welcome = (props) => {
  const { page } = props;
  return (
    <WelcomeContainer>
      <LogoContainer>
        <MainLogo fill="url(#logoGradient)" />
      </LogoContainer>
      <Header className="welcomeHeader">
        <FormattedMessage id="welcome" />
      </Header>
      {page === "login" && (
        <Text className="welcomeText">
          <FormattedMessage id="welcomeLoginMessage" />
        </Text>
      )}
    </WelcomeContainer>
  );
};

export default injectIntl(Welcome);
