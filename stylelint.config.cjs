module.exports = {
    extends: ["stylelint-config-standard-scss", "stylelint-config-standard-vue/scss"],
    rules: {
        "color-named": "never",
        "at-rule-no-unknown": null,
        "scss/at-rule-no-unknown": [
            true,
            {
                ignoreAtRules: ["tailwind"]
            }
        ]
    }
};
