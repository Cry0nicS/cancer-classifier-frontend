// https://nuxt.com/docs/api/configuration/nuxt-config
import {from} from "env-var";
import {Breakpoints} from "./constants/breakpoints";

const envVars = from({
    FIREBASE_API_KEY: process.env.FIREBASE_API_KEY,
    FIREBASE_AUTH_DOMAIN: process.env.FIREBASE_AUTH_DOMAIN,
    FIREBASE_PROJECT_ID: process.env.FIREBASE_PROJECT_ID,
    FIREBASE_STORAGE_BUCKET: process.env.FIREBASE_STORAGE_BUCKET,
    FIREBASE_MESSAGING_SENDER_ID: process.env.FIREBASE_MESSAGING_SENDER_ID,
    FIREBASE_APP_ID: process.env.FIREBASE_APP_ID,
    FIREBASE_MEASUREMENT_ID: process.env.FIREBASE_MEASUREMENT_ID
});

const envVarsConfig = {
    firebaseApiKey: envVars.get("FIREBASE_API_KEY").required().asString(),
    firebaseAuthDomain: envVars.get("FIREBASE_AUTH_DOMAIN").required().asString(),
    firebaseProjectId: envVars.get("FIREBASE_PROJECT_ID").required().asString(),
    firebaseStorageBucket: envVars.get("FIREBASE_STORAGE_BUCKET").required().asString(),
    firebaseMessagingSenderId: envVars.get("FIREBASE_MESSAGING_SENDER_ID").required().asString(),
    firebaseAppId: envVars.get("FIREBASE_APP_ID").required().asString(),
    firebaseMeasurementId: envVars.get("FIREBASE_MEASUREMENT_ID").required().asString()
};

export default defineNuxtConfig({
    ssr: true,
    alias: {
        assets: "/<rootDir>/assets"
    },
    css: ["~/assets/main.scss"],
    devtools: {enabled: true},
    modules: [
        "@nuxt/image",
        "@nuxtjs/i18n",
        "@nuxtjs/stylelint-module",
        "@vueuse/nuxt",
        "nuxt-vuefire"
    ],
    postcss: {
        plugins: {
            "postcss-import": {},
            "tailwindcss/nesting": "postcss-nesting",
            "autoprefixer": {},
            "tailwindcss": {}
        }
    },
    typescript: {
        strict: true,
        typeCheck: true
    },
    image: {
        formats: ["avif", "webp", "gif"],
        screens: {
            "placeholder": 10,
            "icon-sm": 16,
            "icon": 32,
            "logo": 96,
            "xs": 160,
            "hero": 475,
            ...Breakpoints
        }
    },
    i18n: {
        locales: ["de", "en"],
        defaultLocale: "en",
        vueI18n: "./i18n.config.ts",
        detectBrowserLanguage: false,
        // Disable custom route with page components.
        customRoutes: "config",
        pages: {
            "about": {
                de: "/ueber-uns",
                en: "/about"
            },
            "register/index": {
                de: "/registrieren",
                en: "/register"
            },
            "forgot-password/index": {
                de: "/passwort-vergessen",
                en: "/forgot-password"
            }
        }
    },
    vuefire: {
        auth: {
            enabled: true,
            sessionCookie: true
        },
        // TODO: Consider enabling AppCheck.
        config: {
            apiKey: envVarsConfig.firebaseApiKey,
            authDomain: envVarsConfig.firebaseAuthDomain,
            projectId: envVarsConfig.firebaseProjectId,
            storageBucket: envVarsConfig.firebaseStorageBucket,
            messagingSenderId: envVarsConfig.firebaseMessagingSenderId,
            appId: envVarsConfig.firebaseAppId,
            measurementId: envVarsConfig.firebaseMeasurementId
        }
    }
});
