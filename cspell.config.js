/**
 * @type {import("@cspell/cspell-types").FileSettings}
 */
const config = {
    version: "0.2",
    files: ["**/*.{html,js,json,jsx,md,scss,ts,tsx,vue}", "/.*.{ts,tsx,js,jsx,vue}"],
    ignorePaths: [
        "package-lock.json.delete",
        "assets/",
        "package.json",
        "nuxt.config.ts",
        "tailwind.config.ts",
        "public/**"
    ],
    import: ["@cspell/dict-de-de/cspell-ext.json", "@cspell/dict-lorem-ipsum/cspell-ext.json"],
    language: "en,de",
    cache: {
        useCache: true,
        cacheLocation: "node_modules/.cache/cspell"
    },
    dictionaries: [
        "custom",
        "fonts",
        "html",
        "lorem-ipsum",
        "node",
        "software-terms",
        "typescript"
    ],
    dictionaryDefinitions: [
        {
            name: "custom",
            path: "custom.dic",
            addWords: true
        }
    ],
    languageSettings: [
        {
            languageId: "typescript,javascript,vue",
            locale: "*",
            ignoreRegExpList: ["/import .*/"]
        }
    ]
};

export default config;
