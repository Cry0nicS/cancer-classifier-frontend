// https://nuxt.com/docs/api/configuration/nuxt-config
import {Breakpoints} from "./constants/breakpoints";

export default defineNuxtConfig({
    ssr: true,
    alias: {
        assets: "/<rootDir>/assets"
    },
    css: ["~/assets/main.scss"],
    devtools: {enabled: true},
    modules: ["@nuxt/image", "@nuxtjs/stylelint-module", "@vueuse/nuxt", "@nuxtjs/i18n"],
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
        formats: ["avif", "webp"],
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
            about: {
                de: "/ueber-uns",
                en: "/about"
            }
        }
    }
});
