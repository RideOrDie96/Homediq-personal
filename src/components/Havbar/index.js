import React from "react";
//Assets
import { NavbarShape } from "../../assets/navbarShape/navbarShape";
import { HomediqLogoWithLetters } from "../../assets/logos/homediqLogoWithLetters";
//Components
import { menu } from "./components/menu";
//Styles
import { NavbarContainer } from "./components/styledComponents/NavbarContainer";
import {
  MenuContainer,
  ListItem,
} from "./components/styledComponents/MenuContainer";
//Intl
import { injectIntl } from "react-intl";

const Navbar = () => {
  return (
    <NavbarContainer>
      <NavbarShape className="left">
        <HomediqLogoWithLetters style={{ marginLeft: "40%", width: "13em" }} />
      </NavbarShape>
      <MenuContainer>
        {menu.map((item, index) => (
          <ListItem>{menu[index].name}</ListItem>
        ))}
      </MenuContainer>
      <NavbarShape className="right" />
      <div style={{ background: "white", width: "50%", height: "45px" }}></div>
    </NavbarContainer>
  );
};

export default injectIntl(Navbar);
