import {doc, getDoc} from "firebase/firestore";

/**
 * Middleware for the verification page.
 * Only logged-in users without a Firebase document and `isDisabled` set to false,
 * can access the verification page.
 */
export default defineNuxtRouteMiddleware(async (to, _from) => {
    // Only run the middleware on the client side.
    if (import.meta.server) return;

    const nuxtApp = useNuxtApp();
    const t = nuxtApp.$i18n.t;
    let targetPath = nuxtApp.$localePath("/");

    const user = await getCurrentUser();
    const db = useFirestore();

    // Redirect unauthenticated users to the login page.
    if (!user) {
        targetPath = nuxtApp.$localePath("/");
    }

    try {
        const docRef = await getDoc(doc(db, "users", user.uid));

        // If the user's document does not exist or `isDisabled` is true, allow access.
        if (!docRef.exists() || docRef.data().isDisabled !== false) {
            return; // Continue to the verification page.
        }
    } catch (error) {
        return createError({
            statusCode: 500,
            statusMessage: `${t("errors.unexpectedError")} ${t("errors.tryAgain")}`
        });
    }

    if (to.path !== targetPath) {
        return navigateTo(
            {
                path: targetPath
            },
            {external: true}
        );
    }
});
