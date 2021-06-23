import { LOCALES } from "../locales";
import NLFlag from "../../assets/flags/nl";

export default {
  [LOCALES.SERBIAN_LAT]: {
    //Login
    login: "Prijavite se",
    email: "Email",
    password: "Lozinka",
    submit: "Potvrdi",
    forgotPassword: "Zaboravili ste Vašu lozinku?",
    welcome: "Dobrodošli.",
    welcomeLoginMessage:
      "Prijavom na nalog Homed-IQ možete aktivirati testove i pratiti rezultate.",
    rememberMe: "Zapamti me",
    emptyEmail: "You must enter an email.",
    emptyPassword: "You must enter a password.",
    wrongEmail: "Wrong email.",
    wrongPassword: "Wrong password.",
    loginSubTextPart1: "Log in or ",
    loginSubTextPart2: "Create an Account ",
    loginSubTextPart3: "to Activate your Test",
    //Signup
    signup: "Sign Up",
    firstName: "First Name",
    lastName: "Last Name",
    confirmEmail: "Confirm Email",
    signupSubTextPart1:
      "Sign Up if you do not have a Homed-IQ account yet, or ",
    signupSubTextPart2: "Log in here",
    dot: ". ",
    welcomeSignupMessage:
      "By signing up for a Homed-IQ account, you can activate tests and track results.",
    emptyFirstName: "You must enter your first name.",
    emptyLastName: "You must enter your last name.",
    emptyConfirmEmail: "You must enter an email address again.",
    noMatchEmail: "The email confirmation does not match your email address.",
    passwordLength:
      "The password must have the minimum length of 7 characters.",
    //RecoverPassword
    recoverPassword: "Recover Password",
    recoverPasswordSubTextPart1: "Please enter your email address. ",
    recoverPasswordSubTextPart2:
      "You will receive a link to create a new password via email. ",
    recoverPasswordSubTextPart3: "You remembered your password? ",
    recoverPasswordSubTextPart4: "Return to the Log in page",
    //Navbar
    languageSwitchFlag: <NLFlag />,
    languageSwitchText: "NL",
  },
};
