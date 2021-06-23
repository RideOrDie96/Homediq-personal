import { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
//Style
import "./App.css";
//Components
import Navbar from "./components/Havbar/index";
//Pages
import Authentication from "./pages/Authentication";
//i18n
import { LOCALES } from "./i18n";
import { I18nProvider } from "./i18n";

const App = () => {
  const theme = localStorage.getItem("theme");
  const lang = localStorage.getItem("lang");

  if (!theme) {
    localStorage.setItem("theme", "light");
  }
  if (!lang) {
    localStorage.setItem("lang", LOCALES.SERBIAN_LAT);
  }

  const [locale, setLocale] = useState(
    localStorage.getItem("lang")
      ? localStorage.getItem("lang")
      : LOCALES.SERBIAN_LAT
  );

  const handleLanguageChange = (value) => {
    localStorage.setItem("lang", value);
    let req_lang = "";
    if (value === "sr-lt") {
      req_lang = "sr-RS";
    } else if (value === "sr-cy") {
      req_lang = "sr-Cyrl-RS";
    } else {
      req_lang = "en-US";
    }
    setLocale(value);
  };

  useEffect(() => {
    console.log(locale);
  }, [locale]);

  return (
    <I18nProvider locale={locale}>
      <div className="App">
        <Router>
          <Navbar
            fill={"red"}
            locale={locale}
            handleLanguageChange={handleLanguageChange}
          />
          <Switch>
            <Route
              exact
              path="/authentication"
              render={(props) => <Authentication locale={locale} {...props} />}
            />
          </Switch>
        </Router>
      </div>
    </I18nProvider>
  );
};

export default App;
