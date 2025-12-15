import {useDateFormat, useNow} from "@vueuse/core";
import {ISO_LOCALE, LOCALE} from "~/types/constants";
import type {Locale} from "~/types/constants";

/**
 * Formats a given date string into a specified format and locale.
 * Defaults to the current date, English locale, and "ddd, MMMM DD, YYYY, HH:mm" format.
 */
export function formatDate(
    dateString: string = useNow().value.toISOString(),
    locale: Locale = LOCALE.English,
    format = "ddd, MMMM DD, YYYY, HH:mm"
): string {
    return useDateFormat(dateString, format, {
        locales: ISO_LOCALE[locale]
    }).value;
}
