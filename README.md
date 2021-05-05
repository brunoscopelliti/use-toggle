# use-toggle

[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/brunoscopelliti/use-toggle/blob/main/LICENSE)
[![npm version](https://img.shields.io/npm/v/@bscop/use-toggle.svg?style=flat)](https://www.npmjs.com/package/@bscop/use-toggle)
[![CircleCI Status](https://circleci.com/gh/brunoscopelliti/use-toggle.svg?style=shield&circle-token=:circle-token)](https://circleci.com/gh/brunoscopelliti/use-toggle)
[![Coverage](https://img.shields.io/codecov/c/github/brunoscopelliti/use-toggle)](https://app.codecov.io/gh/brunoscopelliti/use-toggle/)

A React hook that offers a shortcut to toggle a boolean state.

## Install

```
npm i @bscop/use-toggle
```

## Usage

```js
import useToggle from "@bscop/use-toggle";

const [state, toggle] = useToggle();
```

## Contribute

Read the [guidelines](./CONTRIBUTING.md).

### Run tests

```
npm test
```

### Coverage

Coverage reports are hosted on [codecov](https://codecov.io/).

```
npm run badge:coverage -- --token=<guid>
```

---

Bruno Scopelliti\
www.brunoscopelliti.com
