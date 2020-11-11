# [Live](https://digvijayu.github.io/gene-viewer-interface/)

[https://digvijayu.github.io/gene-viewer-interface/](https://digvijayu.github.io/gene-viewer-interface/)

## Running on the local machine

- Please make sure you have [node](https://nodejs.org/en/download/) installed on your machine
- run `yarn` on the root to install dependencies
- run `yarn start` to run the app locally on [http://localhost:3000/](http://localhost:3000/)

# Introduction

I have picked the FE part of the project. I have completed both parts of the test.
I have used following plugins and tools and libraries with reasons.

- React: React in my opinion is easy to setup and use for this use case. I had also kept [d3.js](https://d3js.org/) as another option. But state based implementation could be done simply with state hooks.

- [Jest](https://jestjs.io/) + [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/) : Jest unit testing framework works best with react

- styled-component: React is component based framework and in my opinion styled components is the best styling approach to a component based library

- cypress: Tests are written in js

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn`

To install dependencies

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.

### `yarn e2e`

Launches the cypress test runner

### `yarn build`

Builds the app for production to the `build` folder.
