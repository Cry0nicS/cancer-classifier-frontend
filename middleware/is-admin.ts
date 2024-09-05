import {doc, getDoc} from "firebase/firestore";
import type {UserProfile} from "~/types/firebase";
import {USER_ROLE} from "~/types/constants";

/**
 * Middleware for controlling access to protected routes.
 * Only admin users can access these routes.
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
            return handleRedirect("/");
        }

        if (userProfile.role !== USER_ROLE.Admin) {
            // If the user is not an admin, redirect to the home page
            return handleRedirect("/");
        }
    } catch (error) {
        useRollbar().error(error);

        return createError({
            statusCode: 500,
            statusMessage: `${t("errors.unexpectedError")} ${t("errors.tryAgain")}`
        });
    }
});
