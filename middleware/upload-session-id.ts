/**
 * This middleware is used to check if the user as uploaded files and has a valid and active upload session ID.
 * Only users with an active upload session ID can access the dashboard page.
 * Explicitly checks for import.meta.server to ensure that the code is only executed on the client side.
 * This is critical for SSR projects because session storage is only available in the browser, not on the server.
 */
export default defineNuxtRouteMiddleware(async (_to, _from) => {
    if (import.meta.server) return;

    const localePath = useLocalePath();

    // Get the uploadSessionId from the session storage.
    const uploadSessionId = sessionStorage.getItem("uploadSessionId");

    // Redirect the user to the upload page if they do not have a valid upload session ID.
    if (uploadSessionId === null) {
        return navigateTo({path: localePath("/services/upload"), replace: true});
    }
});
