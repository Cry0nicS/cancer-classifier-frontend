import antfu from "@antfu/eslint-config";

export default antfu(
    {
        stylistic: false,
        typescript: true,
        vue: true,
        jsonc: true,
        extends: ["prettier"]
    },
    {
        files: ["**/*.vue"],
        rules: {
            "vue/html-indent": ["error", 4],
            "vue/object-curly-spacing": ["error", "never"],
            "vue/html-closing-bracket-newline": [
                "error",
                {
                    singleline: "never",
                    multiline: "never"
                }
            ],
            // Does not work with Prettier.
            // See: https://prettier.io/blog/2018/11/07/1.15.0#whitespace-sensitive-formatting.
            "vue/singleline-html-element-content-newline": "off",
            "vue/multiline-html-element-content-newline": "off"
        }
    },
    {
        rules: {
            "arrow-parens": ["error", "always"]
        }
    },
    {
        files: ["**/*.json"],
        rules: {
            "jsonc/indent": ["error", 4]
        }
    },
    {
        rules: {
            "node/prefer-global/process": ["error", "always"]
        }
    },
    {
        rules: {
            "ts/consistent-type-definitions": "off",
            "ts/no-explicit-any": "error"
        }
    },
    {
        rules: {
            "unicorn/filename-case": [
                "error",
                {
                    case: "kebabCase",
                    ignore: ["^README\\.md$"]
                }
            ]
        }
    }
);
