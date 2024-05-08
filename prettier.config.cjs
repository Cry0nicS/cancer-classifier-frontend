module.exports = {
    $schema: "https://json.schemastore.org/prettierrc",
    arrowParens: "always",
    bracketSameLine: true,
    bracketSpacing: false,
    endOfLine: "lf",
    htmlWhitespaceSensitivity: "css",
    insertPragma: false,
    jsxSingleQuote: false,
    printWidth: 100,
    proseWrap: "preserve",
    quoteProps: "consistent",
    requirePragma: false,
    semi: true,
    singleAttributePerLine: true,
    singleQuote: false,
    tabWidth: 4,
    trailingComma: "none",
    useTabs: false,
    vueIndentScriptAndStyle: false,
    overrides: [
        {
            // For a detailed explanation, see https://github.com/tailwindlabs/prettier-plugin-tailwindcss/issues/214#issuecomment-1725525854
            files: ["**/**"],
            options: {
                plugins: ["prettier-plugin-tailwindcss"]
            }
        }
    ]
};
