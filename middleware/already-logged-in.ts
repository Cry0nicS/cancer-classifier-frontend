/**
 * This middleware is used to check if the user is authenticated or not.
 * Only authenticated users can access the protected routes.
 */
export default defineNuxtRouteMiddleware(async (_to, _from) => {
    const nuxtApp = useNuxtApp();
    const t = nuxtApp.$i18n.t;

    try {
        // Get the (authenticated) user from Firebase.
        const user = await getCurrentUser();
        const localePath = useLocalePath();

        // Redirect the user to a dedicated page if they are authenticated.
        if (user) {
            return navigateTo(
                {path: localePath("/services/upload")},
                {replace: true, external: true}
            );
        }
    } catch (e) {
        return createError({
            statusCode: 500,
            statusMessage: `${t("errors.unexpectedError")} ${t("errors.tryAgain")}`,
            data: e
        });
    }
});
