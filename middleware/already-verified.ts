import {doc, getDoc} from "firebase/firestore";
import type {UserProfile} from "~/types/firebase";

/**
 * This middleware is used to check if the user is authenticated and their account is enabled.
 * Only users with disabled accounts can access pages like ``register/verification`.
 * If the user is authenticated and their account is enabled, they are redirected to the services upload page.
 */
export default defineNuxtRouteMiddleware(async (to, _from) => {
    if (import.meta.server) return;

    const localePath = useLocalePath();
    // Get the (authenticated) user from Firebase.

    const user = await getCurrentUser();
    const db = useFirestore();
    const targetPath = localePath("/services/upload");

    if (user) {
        const docRef = await getDoc(doc(db, "users", user.uid));

        if (docRef.exists()) {
            const userProfile = docRef.data() as UserProfile;

            if (!userProfile.isDisabled) {
                if (to.path !== targetPath) {
                    return navigateTo(
                        {
                            path: targetPath
                        },
                        {external: true}
                    );
                }
            }
        }
    }
});
