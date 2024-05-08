const MIN_LENGTH = 3;
const MAX_LENGTH = 72;

export default {
    rules: {
        "body-case": [2, "always", "sentence-case"],
        "body-full-stop": [2, "always"],
        "body-leading-blank": [2, "always"],
        "body-max-line-length": [2, "always", MAX_LENGTH],
        "body-min-length": [2, "always", MIN_LENGTH],
        "footer-leading-blank": [2, "always"],
        "footer-max-line-length": [2, "always", MAX_LENGTH],
        "footer-min-length": [2, "always", MIN_LENGTH],
        "header-case": [2, "always", "sentence-case"],
        "header-full-stop": [2, "never"],
        "header-max-length": [2, "always", MAX_LENGTH],
        "header-min-length": [2, "always", MIN_LENGTH],
        "scope-empty": [2, "always"],
        "subject-empty": [2, "always"],
        "type-empty": [2, "always"]
    }
};
