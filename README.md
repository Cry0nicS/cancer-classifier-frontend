# cancer-classifier-frontend

## Installation

To install npm packages run the following commands

-   Run `npm install` to install the project dependencies.
-   Run `cp .env.dist .env`, and update the `.env` file as necessary.

### Run the development server:

-   Run `npm run dev` or `nuxt dev` to start the development server.
    -   Open http://localhost:3000/

## Linting

-   `npm run format-check` - checks for formatting errors.
-   `npm run format` - auto-formats all files.
-   `npm run lint` - checks for Typescript errors.
-   `npm run spell-check` - checks for spelling errors (EN or DE).
-   `npm run style-check` - checks for styling errors (`.scss`).
-   `npm run style-fix` - tries to fix styling issues.
-   `npm run type-check` - checks for Typescript types.

### Spell-checking

CSpell is a library used for spell checking the code. It checks against English, German and some technical dictionaries (e.g. Typescript).

Custom words, that we consider correct, but are not part of any dictionary in use are added to a custom file - `custom.dic`.

Please keep all words in the `custom.dic` file sorted in alphabetical order, lower case. One word per line.

### Committing

There is a "linter" check running before each commit. All the above standards must be respected, in order to commit.

## Troubleshooting

On rare occasions, you might encounter an error related to `.nuxt` folder. <br />
Such an example is missing a specific property in `nuxt.config.ts` after installing a new nuxt module.

To fix this, manually run:

```bash
nuxt prepare
```

Although this should not be necessary, because `nuxt prepare` is run automatically after `npm install` (see `postinstall` script)

#### Auto-imports

This project uses the [auto-imports](https://nuxt.com/docs/guide/concepts/auto-imports) functionality provided by Nuxt3.

## TODOs

-   [ ] Update `stylelint` to ESM-only. See [#5291](https://github.com/stylelint/stylelint/issues/5291)
-   [ ] Update `prettier` to ESM-only. See [#3066](https://github.com/prettier/prettier-vscode/issues/3066)
-   [ ] Update `CSpell` to ESM-only. See [#4402](https://github.com/streetsidesoftware/cspell/issues/4402)
