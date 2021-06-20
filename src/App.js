import { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
//Style
import "./App.css";
//Pages
import Authentication from "./pages/Authentication";
import Login from "./pages/Authentication/Login";
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

  const [locale] = useState(
    localStorage.getItem("lang")
      ? localStorage.getItem("lang")
      : LOCALES.SERBIAN_LAT
  );

  return (
    <I18nProvider locale={locale}>
      <div className="App">
        <Router>
          <Switch>
            <Route
              exact
              path="/authentication"
              render={(props) => <Authentication {...props} />}
            />
          </Switch>
        </Router>
      </div>
    </I18nProvider>
  );
};

export default App;
