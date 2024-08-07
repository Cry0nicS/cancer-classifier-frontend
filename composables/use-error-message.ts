import {FetchError} from "ofetch";

/**
 * `useErrorMessage` is a composable function that provides a method to extract error messages.
 * The function handles different types of errors, including FetchError and generic Error instances.
 */
export function useErrorMessage() {
    const {t} = useI18n();

    // TODO: Explicitly type the error parameter.
    const extractErrorMessage = (error: unknown) => {
        let message = t("errors.unexpectedError");

        if (error instanceof FetchError) {
            message = error.data?.detail || error.message;
        } else if (error instanceof Error) {
            message = error.message;
        } else if (typeof error === "string") {
            message = error;
        }

        return message;
    };

    return {extractErrorMessage};
}
