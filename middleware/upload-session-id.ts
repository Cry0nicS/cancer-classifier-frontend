/**
 * This middleware is used to check if the user has uploaded files and has a valid and active upload session ID.
 * Only users with an active upload session ID can access the dashboard page.
 */
export default defineNuxtRouteMiddleware(async (_to, _from) => {
    const localePath = useLocalePath();

    let uploadSessionId;

    try {
        // Attempt to get the uploadSessionId from the cookie
        uploadSessionId = useCookie("uploadSessionId").value;
    } catch (error) {
        // Redirect to the upload page with an error message or handle as appropriate
        return navigateTo({path: localePath("/services/upload")}, {replace: true, external: true});
    }

    // Redirect the user to the upload page if they do not have a valid upload session ID
    if (!uploadSessionId) {
        return navigateTo({path: localePath("/services/upload")}, {replace: true, external: true});
    }
});
