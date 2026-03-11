import es from "./es.json";
import en from "./en.json";

export const getTranslations = (
  locale: string | undefined,
): typeof en | typeof es => {
  switch (locale) {
    case "en":
      return en;
    default:
      return es;
  }
};
