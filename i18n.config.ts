import de from "./i18n/messages.de";
import en from "./i18n/messages.en";

export default defineI18nConfig(() => ({
    legacy: false,
    locale: "en",
    fallbackLocale: "en",
    messages: {de, en}
}));
