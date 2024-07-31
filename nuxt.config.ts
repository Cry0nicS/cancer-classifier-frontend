// https://nuxt.com/docs/api/configuration/nuxt-config
import {envVarsConfig, i18nPages, routeRules} from "./utils/config";

export default defineNuxtConfig({
    ssr: true,
    site: {indexable: false}, // Disable indexing until the website is ready.
    app: {
        head: {
            script: [
                {
                    hid: "newrelic",
                    src: "newrelic.js",
                    defer: true,
                    type: "text/javascript"
                }
            ]
        }
    },
    alias: {
        assets: "/<rootDir>/assets"
    },
    css: ["~/assets/main.scss"],
    devtools: {enabled: true},
    modules: [
        "@morev/vue-transitions/nuxt",
        "@nuxt/content",
        "@nuxt/image",
        "@nuxtjs/color-mode",
        "@nuxtjs/i18n",
        "@nuxtjs/mdc",
        "@nuxtjs/robots",
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
        pages: i18nPages
    },
    routeRules,
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
    },
    compatibilityDate: {
        default: "2024-07-03",
        firebase: "2024-07-03"
    }
});
