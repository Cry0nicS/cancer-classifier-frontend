import {from} from "env-var";

const envVars = from({
    FIREBASE_API_KEY: process.env.FIREBASE_API_KEY,
    FIREBASE_AUTH_DOMAIN: process.env.FIREBASE_AUTH_DOMAIN,
    FIREBASE_PROJECT_ID: process.env.FIREBASE_PROJECT_ID,
    FIREBASE_STORAGE_BUCKET: process.env.FIREBASE_STORAGE_BUCKET,
    FIREBASE_MESSAGING_SENDER_ID: process.env.FIREBASE_MESSAGING_SENDER_ID,
    FIREBASE_APP_ID: process.env.FIREBASE_APP_ID,
    FIREBASE_MEASUREMENT_ID: process.env.FIREBASE_MEASUREMENT_ID,
    API_URL: process.env.API_URL
});

export const envVarsConfig = {
    firebaseApiKey: envVars.get("FIREBASE_API_KEY").required().asString(),
    firebaseAuthDomain: envVars.get("FIREBASE_AUTH_DOMAIN").required().asString(),
    firebaseProjectId: envVars.get("FIREBASE_PROJECT_ID").required().asString(),
    firebaseStorageBucket: envVars.get("FIREBASE_STORAGE_BUCKET").required().asString(),
    firebaseMessagingSenderId: envVars.get("FIREBASE_MESSAGING_SENDER_ID").required().asString(),
    firebaseAppId: envVars.get("FIREBASE_APP_ID").required().asString(),
    firebaseMeasurementId: envVars.get("FIREBASE_MEASUREMENT_ID").required().asString(),
    apiUrl: envVars.get("API_URL").required().asUrlString()
};

export const i18nPages = {
    "about-us": {
        de: "/ueber-uns",
        en: "/about-us"
    },
    "legal/imprint": {
        de: "/legal/impressum",
        en: "/legal/imprint"
    },
    "legal/contact": {
        de: "/legal/kontakt",
        en: "/legal/contact"
    },
    "legal/eula": {
        de: "/legal/eula",
        en: "/legal/eula"
    },
    "legal/privacy": {
        de: "/legal/datenschutz",
        en: "/legal/privacy"
    },
    "register/index": {
        de: "/registrieren",
        en: "/register"
    },
    "register/verification": {
        de: "/registrieren/verifizierung",
        en: "/register/verification"
    },
    "forgot-password/index": {
        de: "/passwort-vergessen",
        en: "/forgot-password"
    },
    "services/dashboard": {
        de: "/dienstleistungen/dashboard",
        en: "/services/dashboard"
    },
    "services/upload": {
        de: "/dienstleistungen/upload",
        en: "/services/upload"
    },
    "services/history": {
        de: "/dienstleistungen/verlauf",
        en: "/services/history"
    },
    "services/results": {
        de: "/dienstleistungen/ergebnisse",
        en: "/services/results"
    }
};

export const routeRules = {
    "/legal/**": {ssr: false}
};
