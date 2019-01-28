# React-TS Boilerplate

## Description

Boilerplate for client side JS application that includes the following:

- React @16
- Typescript @3
- Webpack @4
- Jest @23

## Scripts

_Use yarn, instead of npm, for better caching/performance_

**yarn start**: Starts dev server with hot module reloading.

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
