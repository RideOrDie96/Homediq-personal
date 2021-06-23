import { DropdownIcon } from "../../../assets/MaterialUIIcons/MaterialUiIcons";
import { FormattedMessage } from "react-intl";

export const menu = [
  {
    path: "/",
    name: "Home",
    allowedRoles: ["Admin", "User", "SuperAdmin"],
  },
  {
    path: "/tests",
    name: "Choose a Test",
    icon: <DropdownIcon />,
    dropdownList: "tests",
    allowedRoles: ["Admin", "User", "SuperAdmin"],
  },
  {
    path: "/authentication",
    name: "Activate Your Test Kit",
    allowedRoles: ["Admin", "User", "SuperAdmin"],
  },
  {
    path: "/b2b",
    name: "For Businesses",
    allowedRoles: ["Admin", "User", "SuperAdmin"],
  },
  {
    path: "/news",
    name: "News",
    allowedRoles: ["Admin", "User", "SuperAdmin"],
  },
  {
    name: <FormattedMessage id="languageSwitchText" />,
    icon: <DropdownIcon />,
    dropdownList: "languages",
    allowedRoles: ["Admin", "User", "SuperAdmin"],
  },
];
