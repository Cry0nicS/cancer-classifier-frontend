import {doc, getDoc} from "firebase/firestore";
import type {UserProfile} from "~/types/firebase";

/**
 * This middleware is used to check if the user is authenticated or not.
 * Only authenticated users can access the protected routes.
 * If the user is not authenticated, they are redirected to the home page.
 * If the user is authenticated but their account is disabled, they are redirected to the waiting room page.
 */
export default defineNuxtRouteMiddleware(async (to, _from) => {
    if (import.meta.server) return;
    // Get the (authenticated) user from Firebase.
    const user = await getCurrentUser();

    const db = useFirestore();
    const localePath = useLocalePath();
    let targetPath = localePath("/");

    if (user) {
        const docRef = await getDoc(doc(db, "users", user.uid));

        if (docRef.exists()) {
            const userProfile = docRef.data() as UserProfile;

            if (userProfile.isDisabled) {
                targetPath = localePath("/register/verification");
            } else {
                targetPath = to.path;
            }
        }
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
