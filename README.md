# cancer-classifier-frontend

## Installation

To install npm packages run the following commands

-   Run `npm install` to install the project dependencies.
-   Run `cp .env.dist .env`, and update the `.env` file as necessary.
-   Download Firebase Admin SDK credentials from the Firebase console:
    -   Login to the Firebase console and navigate to the project settings.
    -   Select "Service accounts" and click on "Generate new private key" for "Node.js.
    -   Save it as `firebase-admin.json` in the root of the project.
        -   Note: You might have to run `git rm --cached firebase-admin.json` to remove it from the git history.

### Run the development server:

-   Run `npm run dev` or `nuxt dev` to start the development server.
    -   Open http://localhost:3000/

## UI Components

This project incorporates UI components from [UI Think](https://ui-thing.behonbaker.com).

Components are directly imported into the `components/Ui` directory, not installed as a package. Consequently, linting is disabled for this folder.

To add new UI components, simply run `npm run ui`, select the desired components and follow the on-screen instructions.

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

## CodeRabbit.ai

Current GitHub repository has an integration with [CodeRabbit.ai](https://coderabbit.ai).
This integration allows for the automatic deployment of the project to the CodeRabbit.ai platform.

The configuration is stored in the `.coderabbit.yaml` file. While currently most of the presets are left to default, the configuration is set to ignore the `components/Ui/**` folder as this is coming directly from UI-Thing library with little to no custom changes.

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

## How to update dependencies

### Minor version updates

Update packages to the latest safe version as follows:

1. Run `npm outdated` to check for outdated packages.
2. Run `npm update` to update _all_ the outdated packages.
    - If you want to update _only_ a specific package, run `npm update <package-name>`.
3. Run `npm outdated` again to check if there are still outdated packages.

### Major version updates

Major version updates should be done with caution, as they may introduce breaking changes.

You can do so by using the `@latest`. e.g. `npm install <packagename>@latest`

### Alternative

As an alternative, you can also use [npm-check-updates](https://github.com/raineorshine/npm-check-updates).

## TODOs

-   [ ] Update `stylelint` to ESM-only. See [#5291](https://github.com/stylelint/stylelint/issues/5291)
-   [ ] Update `prettier` to ESM-only. See [#3066](https://github.com/prettier/prettier-vscode/issues/3066)
-   [ ] Update `CSpell` to ESM-only. See [#4402](https://github.com/streetsidesoftware/cspell/issues/4402)
