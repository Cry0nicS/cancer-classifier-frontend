import {doc, getDoc} from "firebase/firestore";
import type {UserProfile} from "~/types/firebase";

/**
 * Middleware for controlling access to protected routes.
 * Only authenticated users can access these routes.
 * Unauthenticated users are redirected to the home page.
 * Authenticated users with disabled accounts are redirected to the verification page.
 */
export default defineNuxtRouteMiddleware(async (to, _from) => {
    const nuxtApp = useNuxtApp();
    const t = nuxtApp.$i18n.t;

    const handleRedirect = (url: string) => {
        const redirectPath = nuxtApp.$localePath(url);
        if (to.path !== redirectPath) {
            return navigateTo({path: redirectPath}, {replace: true, external: true});
        }
    };

    try {
        // Get the (authenticated) user from Firebase.
        const user = await getCurrentUser();
        const db = useFirestore();

        if (!user) {
            // If the user is not logged in, redirect to the register page
            return handleRedirect("/");
        }

        const docRef = await getDoc(doc(db, "users", user.uid));
        const userProfile = docRef.data() as UserProfile;

        if (!docRef.exists() || userProfile.isDisabled !== false) {
            // If the user's account is disabled, redirect to the verification page
            return handleRedirect("/register/verification");
        }
    } catch (error) {
        useRollbar().error(error);

        return createError({
            statusCode: 500,
            statusMessage: `${t("errors.unexpectedError")} ${t("errors.tryAgain")}`
        });
    }
});
