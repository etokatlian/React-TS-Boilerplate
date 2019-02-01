# React-TS Boilerplate

## Description

Boilerplate for client side JS application that`includes the following:

- React @16
- Typescript @3
- Styled-Components @4
- Ant Design @3
- Webpack @4
- Jest @23
- React-router-dom @4
- Express @4

## Scripts

_Use yarn, instead of npm, for better caching/performance_

**yarn start**: Starts dev server with hot module reloading.

**yarn build**: Cleans dist & Creates production build in /dist.

**yarn dev**: Cleans dist & Creates dev build in /dist with sourcemaps.

**yarn serve**: Starts local node server and serves index.html from /dist.

**yarn test _file_name_**: Tests specific file.

**yarn test**: Runs jest test + gets coverage report.

## VSCode

To work on this project and abide by the linting rules, please install the following Extensions: TypeScrit TSLint Plugin (New Version), Prettier

Confine the TypeScrit TSLint Plugin (New Version), Prettier extensions to this project by creating a .vscode folder inside your root dir, placing a settings.json file in it and the following contents:

```
{
  "javascript.format.enable": false,
  "editor.formatOnSave": true,
  "prettier.tslintIntegration": true
}
```
