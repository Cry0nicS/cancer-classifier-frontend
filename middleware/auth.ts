import {doc, getDoc} from "firebase/firestore";
import type {UserProfile} from "~/types/firebase";

/**
 * This middleware is used to check if the user is authenticated or not.
 * Only authenticated users can access the protected routes.
 * If the user is not authenticated, they are redirected to the home page.
 * If the user is authenticated but their account is disabled, they are redirected to the verification page.
 */
export default defineNuxtRouteMiddleware(async (to, _from) => {
    // Only run the middleware on the client side.
    if (import.meta.server) return;

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
            return handleRedirect("/login");
        }

        const docRef = await getDoc(doc(db, "users", user.uid));
        const userProfile = docRef.data() as UserProfile;

        if (!docRef.exists() || userProfile.isDisabled !== false) {
            // If the user's account is disabled, redirect to the verification page
            return handleRedirect("/register/verification");
        }
    } catch (error) {
        return createError({
            statusCode: 500,
            statusMessage: `${t("errors.unexpectedError")} ${t("errors.tryAgain")}`
        });
    }
});
