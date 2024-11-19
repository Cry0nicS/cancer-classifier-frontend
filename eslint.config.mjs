// @ts-check
import antfu from "@antfu/eslint-config";
import withNuxt from "./.nuxt/eslint.config.mjs";

export default withNuxt(
    antfu(
        {
            stylistic: false,
            typescript: true,
            vue: true,
            jsonc: true,
            ignores: [
                "components/Ui/**",
                ".coderabbit.yaml",
                ".github/**",
                "public/assets/scripts/**"
            ]
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
                "vue/html-self-closing": "off",
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
                "style/ts-consistent-type-definitions": "off", // Fixed rule name
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
        },
        {
            // TODO: Re-enable theses rules when they are fixed.
            rules: {
                "ts/consistent-type-definitions": "off", // Fixed rule name
                "perfectionist/sort-imports": "off"
            }
        }
    )
);
