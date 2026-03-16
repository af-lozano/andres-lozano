import es from "./es.json";
import en from "./en.json";

type locale = "en" | "es" | undefined;

let sessionLocale: locale = undefined;

export const getTranslations = (
  locale: string | undefined,
): typeof en | typeof es => {
  const actualLocale = sessionLocale || locale;
  switch (actualLocale) {
    case "en":
      return en;
    default:
      return es;
  }
};

export const setLocale = (locale: locale) => {
  sessionLocale = locale;
};
