/**
 * Composable to retrieve session IDs.
 *
 * This composable provides methods to retrieve the upload session ID from the cookie
 * and the session ID from the query parameters.
 */
export const useSessionId = () => {
    const {t} = useI18n();

    /**
     * Get the upload session ID from the cookie.
     * Upload session ID is used to track the user's current and active upload session.
     *
     * @returns {string} The current upload session ID.
     * @throws {Error} If there is no upload session ID.
     */
    const getUploadSessionId = (): string => {
        const uploadSessionId = useCookie<string>("uploadSessionId");

        if (!uploadSessionId.value) {
            // This should never happen as the middleware prevents the user from accessing the page without a session ID.
            throw new Error(t("errors.unexpectedError"));
        }

        return uploadSessionId.value;
    };

    /**
     * Get the session ID from the query parameters.
     * Session ID is used to track a user's historical session. Required for previewing the results.
     *
     * @returns {string} The current session ID from the query param.
     * @throws {Error} If there is no session ID.
     */
    const getQueryParamSessionId = (): string => {
        const route = useRoute();

        if (!route.query.sessionId) {
            // This should never happen as the middleware prevents the user from accessing the page without a session ID.
            throw new Error(t("errors.unexpectedError"));
        }

        return route.query.sessionId as string;
    };

    return {
        getUploadSessionId,
        getQueryParamSessionId
    };
};
