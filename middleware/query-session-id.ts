/**
 * Middleware to ensure the sessionId query parameter is present when navigating to a new page.
 * If the sessionId is missing, the user is redirected to the home page.
 *
 */
export default defineNuxtRouteMiddleware(async (to, _from) => {
    const localePath = useLocalePath();

    if (!to.query.sessionId) {
        return navigateTo({path: localePath("/services/history"), replace: true});
    }
});
