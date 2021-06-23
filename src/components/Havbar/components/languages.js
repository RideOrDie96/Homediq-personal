import UKFlag from "../../../assets/flags/uk";
import NLFlag from "../../../assets/flags/nl";
import { LOCALES } from "../../../i18n";

export const languages = [
  {
    name: "Language",
    className: "invisible",
  },
  {
    name: (
      <span>
        <UKFlag /> EN
      </span>
    ),
    key: `${LOCALES.ENGLISH}`,
  },
  {
    name: (
      <span>
        <NLFlag /> NL
      </span>
    ),
    key: `${LOCALES.SERBIAN_LAT}`,
  },
];
