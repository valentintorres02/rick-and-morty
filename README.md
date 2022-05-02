# Rick and Morty app

The demo for this project can be found [here](https://rick-and-morty-app02.netlify.app/).

## Table of Contents:

- [Folder Structure](#folder-structure)
- [Stack](#stack)
- [Installing](#installing)
  - [Running dev](#running-dev)
  - [Unit Tests](#unit-tests)
  - [Main branches](#main-branches)

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

## Component structure

```sh
components/
└── Home/
    ├── __tests__/
    ├── Home.charactersCard.tsx
```

## API Requests Handling

Use of a mix of `GenQL` and `useSWR` hooks. `GenQL` client is configured and used to make requests to the open GraphQL API.

Each component will have a file `.api.tsx` for example:

```sh
components/
└── Home/
    ├── __tests__/
    ├── Home.api.tsx
    ├── Home.characterCard.tsx
```

Where that file will import the client to be used as the fetcher generator. We also include the API types as export to be used in the component.

Inside the component or view we use the `useSWR` hook to make the actual request and handle our API data.

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

### Installing

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

### Main branches

The following branches are handled:

- `master`.
- `dev`.
