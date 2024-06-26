// https://nuxt.com/docs/api/configuration/nuxt-config
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

const envVarsConfig = {
    firebaseApiKey: envVars.get("FIREBASE_API_KEY").required().asString(),
    firebaseAuthDomain: envVars.get("FIREBASE_AUTH_DOMAIN").required().asString(),
    firebaseProjectId: envVars.get("FIREBASE_PROJECT_ID").required().asString(),
    firebaseStorageBucket: envVars.get("FIREBASE_STORAGE_BUCKET").required().asString(),
    firebaseMessagingSenderId: envVars.get("FIREBASE_MESSAGING_SENDER_ID").required().asString(),
    firebaseAppId: envVars.get("FIREBASE_APP_ID").required().asString(),
    firebaseMeasurementId: envVars.get("FIREBASE_MEASUREMENT_ID").required().asString(),
    apiUrl: envVars.get("API_URL").required().asUrlString()
};

export default defineNuxtConfig({
    ssr: true,
    alias: {
        assets: "/<rootDir>/assets"
    },
    css: ["~/assets/main.scss"],
    devtools: {enabled: true},
    modules: [
        "@morev/vue-transitions/nuxt",
        "@nuxt/image",
        "@nuxtjs/color-mode",
        "@nuxtjs/i18n",
        "@nuxtjs/mdc",
        "@nuxtjs/stylelint-module",
        "@nuxtjs/tailwindcss",
        "@vee-validate/nuxt",
        "@vueuse/nuxt",
        "nuxt-icon",
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
        shim: false,
        strict: true,
        typeCheck: true
    },
    image: {
        formats: ["avif", "webp", "gif"]
    },
    i18n: {
        locales: ["de", "en"],
        defaultLocale: "en",
        vueI18n: "./i18n.config.ts",
        detectBrowserLanguage: false,
        // Disable custom route with page components.
        customRoutes: "config",
        pages: {
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
        }
    },
    vuefire: {
        auth: {
            enabled: true,
            sessionCookie: true
        },
        // TODO: Consider enabling AppCheck.
        // API keys for Firebase are not private.
        // See https://firebase.google.com/support/guides/security-checklist#api-keys-not-secret
        config: {
            apiKey: envVarsConfig.firebaseApiKey,
            authDomain: envVarsConfig.firebaseAuthDomain,
            projectId: envVarsConfig.firebaseProjectId,
            storageBucket: envVarsConfig.firebaseStorageBucket,
            messagingSenderId: envVarsConfig.firebaseMessagingSenderId,
            appId: envVarsConfig.firebaseAppId,
            measurementId: envVarsConfig.firebaseMeasurementId
        }
    },
    tailwindcss: {
        exposeConfig: true,
        editorSupport: true,
        cssPath: ["~/assets/main.scss", {injectPosition: "last"}]
    },
    colorMode: {
        classSuffix: "",
        preference: "system",
        fallback: "dark"
    },
    imports: {
        imports: [
            {
                from: "tailwind-variants",
                name: "tv"
            },
            {
                from: "tailwind-variants",
                name: "VariantProps",
                type: true
            },
            {
                from: "vue-sonner",
                name: "toast",
                as: "useSonner"
            }
        ]
    },
    runtimeConfig: {
        apiUrl: envVarsConfig.apiUrl
    },
    build: {
        transpile: ["vue-sonner"]
    }
});
