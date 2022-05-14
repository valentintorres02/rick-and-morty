<img src="http://assets.stickpng.com/images/58f37731a4fa116215a92411.png" height="200px" align="right"/>

# Rick and Morty App

[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)](https://github.com/prettier/prettier)

Deployed demo [here](https://rick-and-morty-app02.netlify.app/).

## Table of Contents:

- [Folder Structure](#folder-structure)
- [Stack](#stack)
- [Installation](#installing)
  - [Running dev](#running-dev)
  - [Unit Tests](#unit-tests)

## Folder Structure

```sh
📦src
 ┣ 📂components
 ┃ ┣ 📂Character
 ┃ ┃ ┣ 📂__tests__
 ┃ ┃ ┃ ┗ 📜Character.detail.test.tsx
 ┃ ┃ ┣ 📜Character.api.tsx
 ┃ ┃ ┣ 📜Character.container.tsx
 ┃ ┃ ┣ 📜Character.detail.tsx
 ┃ ┃ ┗ 📜Character.notFound.tsx
 ┃ ┣ 📂ErrorBoundary
 ┃ ┃ ┣ 📜ErrorBoundary.container.tsx
 ┃ ┃ ┗ 📜ErrorBoundary.fallback.tsx
 ┃ ┣ 📂Home
 ┃ ┃ ┣ 📂__tests__
 ┃ ┃ ┃ ┗ 📜Home.charactersCard.test.tsx
 ┃ ┃ ┣ 📜Home.api.tsx
 ┃ ┃ ┣ 📜Home.charactersCard.tsx
 ┃ ┃ ┣ 📜Home.charactersList.tsx
 ┃ ┃ ┣ 📜Home.container.tsx
 ┃ ┃ ┣ 📜Home.searchBar.tsx
 ┃ ┃ ┗ 📜Home.skeleton.tsx
 ┃ ┗ 📂shared
 ┃ ┃ ┣ 📜GoBack.tsx
 ┃ ┃ ┣ 📜Loader.tsx
 ┃ ┃ ┣ 📜ScrollToTop.tsx
 ┃ ┃ ┗ 📜Separator.tsx
 ┣ 📂config
 ┃ ┣ 📜client.ts
 ┃ ┗ 📜constants.ts
 ┣ 📂graphql
 ┃ ┗ 📂client
 ┃ ┃ ┣ 📜guards.esm.js
 ┃ ┃ ┣ 📜index.d.ts
 ┃ ┃ ┣ 📜index.js
 ┃ ┃ ┣ 📜schema.graphql
 ┃ ┃ ┣ 📜schema.ts
 ┃ ┃ ┗ 📜types.esm.js
 ┣ 📂lib
 ┃ ┣ 📜liveQueries.ts
 ┃ ┣ 📜mocks.ts
 ┃ ┣ 📜types.ts
 ┃ ┗ 📜utils.ts
 ┣ 📂routes
 ┃ ┣ 📜Character.route.tsx
 ┃ ┣ 📜Home.route.tsx
 ┃ ┗ 📜NotFound.route.tsx
 ┣ 📂styles
 ┃ ┗ 📜tailwind.css
 ┣ 📜App.css
 ┣ 📜App.tsx
 ┣ 📜index.tsx
 ┣ 📜Providers.tsx
 ┣ 📜react-app-env.d.ts
 ┗ 📜setupTests.ts
```

Main views are in `src/routes` folder.

## Stack

- [x] [Yarn](https://yarnpkg.com/) as the package manager.
- [x] [Webpack](https://webpack.js.org/) as the bundler.
- [x] [Jest](https://jestjs.io/) as the test runner.
- [x] [React](https://reactjs.org) as the ui library.
- [x] [TypeScript](https://www.typescriptlang.org) as the language.
- [x] [PostCSS](https://postcss.org) for CSS preprocessing.
- [x] [TailwindCSS](https://tailwindcss.com) as a CSS framework.
- [x] [Ant Design](https://ant.design/) as a provider for UI components.
- [x] [ESLint](https://eslint.org) as a linter.
- [x] [Prettier](https://prettier.io) as a formatter.
- [x] [Git](https://git-scm.com) as the source control manager.
- [x] [swr](https://swr.vercel.app/) as the data fetching hook.
- [x] [genql](https://genql.vercel.app/) as the graphql client.

## Installation

It is required to have `yarn` installed on your PC.

```sh
yarn install
```

Create .env file and fill it with .env.example keys

### Running dev

```sh
yarn run codegen
yarn run start
```

`yarn run codegen` creates the `graphql` folder which will have the genql client ready to use.

### Unit Tests

```sh
yarn run test
```
