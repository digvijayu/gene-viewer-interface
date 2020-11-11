# [Live](https://digvijayu.github.io/gene-viewer-interface/)

[https://digvijayu.github.io/gene-viewer-interface/](https://digvijayu.github.io/gene-viewer-interface/)

# Running on the local machine

- Please make sure you have [node](https://nodejs.org/en/download/) installed on your machine

- run `yarn` on the root to install dependencies

- run `yarn start` to run the app locally on [http://localhost:3000/](http://localhost:3000/)

- run `yarn test` to run the unit tests

- run `yarn e2e` to run the automated end to end tests

# Introduction

I have picked the FE part of the project. I have completed both parts of the test.
I have used following plugins and tools and libraries with reasons.

- [React](https://reactjs.org/): React in my opinion is easy to setup and use for this use case. I had also kept [d3.js](https://d3js.org/) as another option. But state based implementation could be done simply with state hooks.

- [Typescript](https://www.typescriptlang.org/): I have used [Flow](https://flow.org/en/), [Elm](https://elm-lang.org/) and [Typescript](https://www.typescriptlang.org/) in my past projects. Elm and Typescript both are my personal favorite. Elm is too strict when it comes to typechecking but it's only available for Elm-lang. Typescript is smarter as well as strict (if developers avoid using any :)). So Typescript was the obvious winner.

- [Jest](https://jestjs.io/) + [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/) : Jest unit testing framework works best with React and React Testing Library has nicely structured APIs which helps me write tests faster.

- [styled-component](https://styled-components.com/): React is component based framework and in my opinion styled components is the best styling approach to a component based library.

- [cypress](https://www.cypress.io/): Tests are written in JavaScript and easily readable.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn`

To install dependencies

### `yarn start`

Runs the app in the development mode.
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.

### `yarn e2e`

Launches the cypress test runner

### `yarn build`

Builds the app for production to the `build` folder.

### `yarn deploy`

Use this command after the build command. This command will deploy app to the github pages.
