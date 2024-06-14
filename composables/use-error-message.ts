import {FetchError} from "ofetch";

/**
 * `useErrorMessage` is a composable function that provides a method to extract error messages.
 * The function handles different types of errors, including FetchError and generic Error instances.
 */
export function useErrorMessage() {
    const {t} = useI18n();

    const extractErrorMessage = (error: unknown) => {
        let message = t("errors.unexpected-error");

        if (error instanceof FetchError) {
            const fetchError = error as FetchError;
            message = fetchError.data?.detail || fetchError.message;
        } else if (error instanceof Error) {
            message = error.message;
        }

        return message;
    };

    return {extractErrorMessage};
}
