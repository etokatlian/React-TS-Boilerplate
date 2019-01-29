# React-TS Boilerplate

## Description

Boilerplate for client side JS application that`includes the following:

- React @16
- Typescript @3
- Webpack @4
- Jest @23

## Scripts

_Use yarn, instead of npm, for better caching/performance_

**yarn start**: Starts dev server with hot module reloading.

**yarn build**: Cleans dist & Creates production build in /dist.

**yarn dev**: Cleans dist & Creates dev build in /dist with sourcemaps.

**yarn serve**: Starts local node server and serves index.html from /dist.

**yarn test _file_name_**: Tests specific file.

**yarn test**: Runs jest test + gets coverage report.

## Branching

**master**: Production branch.

**integration**: Branched directly off of master.

**feature branches** 'feature/_featureName_': All development will be done in feature branches that are DIRECTLY branched off of integration branch. Please use the listed naming convention.

**bug fixes** 'fix/_fixName_: All bug fixes will be done in their own branches following the listed naming convention.

**IMPORTANT**: Once development on a feature/bug branch is complete, please rebase your branch with the appropriate base branch before submitting a pull request. _Example_: Feature A is being worked on in 'feature/A', which is branched directly off of integration. Once Feature A is complete, 'feature/A' is re-based with integration, **_all conflicts are resolved_**, and then a pull request is submitted.

## Tests

Statement, Branch, Func and Line coverage must exceed 80% before submitting a pull request into integration.

## Commits

Write the summary line and description of what you have done in the imperative mode, that is as if you were commanding someone. Start the line with "Fix", "Add", "Change" instead of "Fixed", "Added", "Changed"

Don't end the summary line with a period - it's a title and titles don't end with a period.

## VSCode

To work on this project and abide by the linting rules, please install the following Extensions: TSLint, Prettier

Confine the TSLint, Prettier extensions to this project by using "Enable (Workspace)" so these addons don't interfere with other projects. Doing so will create a .vscode folder in your root with settings containing the settings enabled for this workspace. The .vscode folder is also added to the .gitignore file.
