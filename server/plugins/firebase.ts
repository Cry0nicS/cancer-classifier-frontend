import {applicationDefault, initializeApp} from "firebase-admin/app";
import {envVarsConfig} from "~/utils/config";
/**
 * Firebase Admin initialization plugin for Nuxt 3.
 *
 * This plugin initializes the Firebase Admin SDK using the default application credentials.
 * It is intended to be used with Nuxt 3's Nitro server.
 */
export default defineNitroPlugin((_nitroApp) => {
    initializeApp({
        credential: applicationDefault(),
        projectId: envVarsConfig.firebaseProjectId
    });

    console.log("Firebase Admin SDK initialized");
});
