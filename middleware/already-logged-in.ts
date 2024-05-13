/**
 * This middleware is used to check if the user is authenticated or not.
 * Only authenticated users can access the protected routes.
 */
export default defineNuxtRouteMiddleware(async (_to, _from) => {
    // Get the (authenticated) user from Firebase.
    const user = await getCurrentUser();

    // Redirect the user to a dedicated page if they are authenticated.
    if (user) {
        return navigateTo("/new-page", {replace: true});
    }
});
