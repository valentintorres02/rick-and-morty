<h1>Rick and Morty app</h1>

The demo for this project can be found [here](https://rick-and-morty-app02.netlify.app/).

## Table of Contents:

- [Folder Structure](#folder-structure)
- [Stack](#stack)
- [Usage](#usage)
  - [Installing](#installing)
  - [Running dev](#running-dev)
  - [Unit Tests](#unit-tests)
  - [Main branches](#main-branches)
  - [Sub-branches](#sub-branches)

## Folder Structure

````sh
📦src
 ┣ 📂components
 ┃ ┣ 📂Character
 ┃ ┣ 📂ErrorBoundary
 ┃ ┃ ┣ 📜ErrorBoundary.container.tsx
 ┃ ┃ ┗ 📜ErrorBoundary.fallback.tsx
 ┃ ┗ 📂Home
 ┃ ┃ ┣ 📂__tests__
 ┃ ┃ ┣ 📜Home.api.tsx
 ┃ ┃ ┗ 📜Home.charactersCard.tsx
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
 ┣ 📜App.test.tsx
 ┣ 📜App.tsx
 ┣ 📜index.tsx
 ┣ 📜Providers.tsx
 ┣ 📜react-app-env.d.ts
 ┗ 📜setupTests.ts```

The main views will be in `src/routes` folder.

## Component structure

```sh
components/
└── Home/
    ├── __tests__/
    ├── Home.charactersCard.tsx
````

We use the name of the component followed by the specific components associated with them, this provides an easier experience for the developer tracking files when they have too many opened tabs.

Inside the `__tests__` folder we will add all tests the developer think its necessary to add. The idea is to test user interactions with the DOM.

We can add custom classes inside `src/main.css` or add custom CSS attributes inside `tailwind.config.js` by extending Tailwind current library and adding new ones.

## API Requests Handling

We use a mix of `GenQL` and `useSWR` hooks. We configure the client from `GenQL` which we use to make requests to the backend.

We will add a `.api.tsx` file inside the component, for example:

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

## Usage

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

The `yarn run codegen` creates the `graphql` folder which will have the genql client ready to use.

## Types of tests:

### Unit Tests

```sh
yarn run test
```

### Main branches

We currently handle the following branches:

- `master`.
- `dev`.

### Sub-branches

We will not upload anything directly to main, if the developer wants to add a feature, then they have to create a branch, the options available are:

- `feat/<name-of-the-feature>`.
- `refactor/<name-of-the-refactor>`.
- `fix/<name-of-the-fixed-feature>`.

From `dev` do:

1. `git pull`.
2. Then create a branch, for example `git checkout -b feat/awesome-form`
3. Do your work.
4. Proceed to commit your feature using a descriptive name.
5. Push your work to your branch and create a pull request.

---
