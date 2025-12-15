import {doc, getDoc} from "firebase/firestore";

/**
 * Middleware for controlling access to the verification page.
 * Only logged-in users without a Firebase document and with `isDisabled` set to false
 * can access the verification page. Unauthenticated users are redirected to the home page.
 */
export default defineNuxtRouteMiddleware(async (to, _from) => {
    const nuxtApp = useNuxtApp();
    const t = nuxtApp.$i18n.t;
    let targetPath = nuxtApp.$localePath("/");

    const db = useFirestore();

    try {
        const user = await getCurrentUser();

        // Redirect unauthenticated users to the login page.
        if (!user) {
            targetPath = nuxtApp.$localePath("/");
        }

        const docRef = await getDoc(doc(db, "users", user.uid));

        // If the user's document does not exist or `isDisabled` is true, allow access.
        if (!docRef.exists() || docRef.data().isDisabled !== false) {
            return; // Continue to the verification page.
        }
    } catch (error) {
        return createError({
            statusCode: 500,
            statusMessage: `${t("errors.unexpectedError")} ${t("errors.tryAgain")}`,
            data: error
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
