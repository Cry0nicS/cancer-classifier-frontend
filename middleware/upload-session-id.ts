/**
 * This middleware is used to check if the user has uploaded files and has a valid and active upload session ID.
 * Only users with an active upload session ID can access the dashboard page.
 */
export default defineNuxtRouteMiddleware(async (_to, _from) => {
    const localePath = useLocalePath();

    // Get the uploadSessionId from the cookie.
    const uploadSessionId = useCookie("uploadSessionId");

    // Redirect the user to the upload page if they do not have a valid upload session ID.
    if (!uploadSessionId.value) {
        return navigateTo({path: localePath("/services/upload"), replace: true});
    }
});
