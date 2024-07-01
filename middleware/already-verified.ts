import {doc, getDoc} from "firebase/firestore";
import type {UserProfile} from "~/types/firebase";

/**
 * Middleware to check user authentication and account status.
 * Redirects authenticated users with enabled accounts to their desired page.
 * Redirects authenticated users with disabled accounts to the registration/verification page.
 * Unauthenticated users are redirected to the registration page.
 */
export default defineNuxtRouteMiddleware(async (to, _from) => {
    // Only run the middleware on the client side.
    if (import.meta.server) return;

    const localePath = useLocalePath();
    // Get the (authenticated) user from Firebase.
    const user = await getCurrentUser();
    const db = useFirestore();
    let targetPath = localePath("/register");

    // Check if the user is authenticated
    if (user) {
        // Get the user document reference from Firestore.
        const docRef = await getDoc(doc(db, "users", user.uid));

        // Check if the user profile (Firebase document) exists.
        if (docRef.exists()) {
            const userProfile = docRef.data() as UserProfile;

            // Check if the user's account is disabled
            if (userProfile.isDisabled) {
                // Redirect disabled users to the verification page.
                targetPath = localePath(to.path);
            } else {
                // Allow access to the target page for enabled users.
                targetPath = localePath("/services/upload");
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
