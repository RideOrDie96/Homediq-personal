import React, { useState, useEffect } from "react";
//Assets
import { NavbarShape } from "../../assets/navbarShape/navbarShape";
import { HomediqLogoWithLetters } from "../../assets/logos/homediqLogoWithLetters";
import { CartIcon } from "../../assets/cartIcon/CartIcon";
import UKFlag from "../../assets/flags/uk";
import NLFlag from "../../assets/flags/nl";
//Components
import { menu } from "./components/menu";
import { testsDropdownList } from "./components/testsDropdownList";
//Styles
import { NavbarContainer } from "./components/styledComponents/NavbarContainer";
import {
  MenuContainer,
  ListItem,
  ListLink,
  Item,
} from "./components/styledComponents/MenuContainer";
import { NavbarDiv } from "./components/styledComponents/NavbarDiv";
import { Menu } from "@material-ui/core";
//Intl
import { I18nProvider } from "../../i18n";
import { LOCALES } from "../../i18n/locales";
import { injectIntl } from "react-intl";
import { languages } from "./components/languages";

const Navbar = (props) => {
  const { locale, handleLanguageChange } = props;

  const [anchorEl, setAnchorEl] = useState(null);
  const [anchorElLang, setAnchorElLang] = useState(null);

  useEffect(() => {
    console.log(locale);
  }, [locale]);

  const handleDropdownTests = (event, dropdownList) => {
    dropdownList === "tests" && setAnchorEl(event.currentTarget);
    dropdownList === "languages" && setAnchorElLang(event.currentTarget);
  };

  const handleCloseDropdownTests = () => {
    setAnchorElLang(null);
    setAnchorEl(null);
  };

  const handleLangChange = (value) => {
    handleLanguageChange(value);
    handleCloseDropdownTests();
    console.log(locale);
  };

  return (
    <I18nProvider locale={locale}>
      <NavbarContainer>
        <div style={{ display: "flex" }}>
          <NavbarDiv>
            <HomediqLogoWithLetters
              style={{ marginTop: "5px", marginLeft: "59%", width: "13em" }}
            />
          </NavbarDiv>
          <NavbarShape className="left"></NavbarShape>
        </div>
        <div
          style={{
            display: "flex",
            backgroundColor: "white",
          }}
        >
          <MenuContainer>
            {menu.map((item, index) => (
              <div onMouseLeave={() => handleCloseDropdownTests()}>
                <ListItem
                  onMouseEnter={(event) =>
                    handleDropdownTests(event, item.dropdownList)
                  }
                >
                  <ListLink to={item.path}>
                    <div style={{ display: "flex", alignItems: "center" }}>
                      {item.dropdownList === "languages" &&
                        (locale === LOCALES.ENGLISH ? <UKFlag /> : <NLFlag />)}
                      {item.name} {item.icon}
                    </div>
                  </ListLink>
                </ListItem>
                {item.dropdownList === "tests" && (
                  <Menu
                    anchorEl={anchorEl}
                    keepMounted
                    open={Boolean(anchorEl)}
                    onClose={handleCloseDropdownTests}
                    MenuListProps={{ onMouseLeave: handleCloseDropdownTests }}
                    getContentAnchorEl={null}
                    anchorReference="anchorPosition"
                    anchorPosition={{ top: 73, left: 470 }}
                    anchorOrigin={{
                      vertical: "bottom",
                      horizontal: "left",
                    }}
                    transformOrigin={{
                      vertical: "top",
                      horizontal: "left",
                    }}
                  >
                    {testsDropdownList.map((item) => (
                      <Item
                        className={item.className}
                        onClick={handleCloseDropdownTests}
                      >
                        {item.name}
                      </Item>
                    ))}
                  </Menu>
                )}
                {item.dropdownList === "languages" && (
                  <Menu
                    anchorEl={anchorElLang}
                    keepMounted
                    open={Boolean(anchorElLang)}
                    onClose={handleCloseDropdownTests}
                    MenuListProps={{ onMouseLeave: handleCloseDropdownTests }}
                    getContentAnchorEl={null}
                    anchorReference="anchorPosition"
                    anchorPosition={{ top: 73, left: 1010 }}
                    anchorOrigin={{
                      vertical: "bottom",
                      horizontal: "left",
                    }}
                    transformOrigin={{
                      vertical: "top",
                      horizontal: "left",
                    }}
                  >
                    {languages.map((item) => (
                      <Item
                        key={item.key}
                        className={item.className}
                        onClick={() => handleLangChange(item.key)}
                      >
                        {item.name}
                      </Item>
                    ))}
                  </Menu>
                )}
              </div>
            ))}
          </MenuContainer>
          <div
            style={{
              marginLeft: "25%",
              display: "flex",
              alignItems: "center",
            }}
          >
            <CartIcon style={{ width: "25px", height: "25px" }} />
          </div>
        </div>
      </NavbarContainer>
    </I18nProvider>
  );
};

export default injectIntl(Navbar);
