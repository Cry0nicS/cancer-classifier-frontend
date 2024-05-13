/**
 * This middleware is used to check if the user is authenticated or not.
 * Only authenticated users can access the protected routes.
 */
export default defineNuxtRouteMiddleware(async (to, _from) => {
    // Get the (authenticated) user from Firebase.
    const user = await getCurrentUser();

    // Redirect the user to the home (login) page if they are not authenticated.
    if (!user && to.path !== "/") {
        return navigateTo({
            path: "/",
            query: {
                redirect: to.fullPath
            }
        });
    }
});
