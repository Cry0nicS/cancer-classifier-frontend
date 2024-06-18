import {ISO_LOCALE, type Locale} from "~/types/constants";

export function formatDate(
    dateString: string,
    locale: Locale,
    format = "ddd, MMMM DD, YYYY, HH:mm"
) {
    return useDateFormat(dateString, format, {
        locales: ISO_LOCALE[locale]
    }).value;
}
