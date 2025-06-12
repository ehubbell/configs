## Overview
This library contains a collection of configs for various projects.
It's designed to simplify and standardize your project setup for less boilerplate and faster development.

## Installation
```
npm i @ehubbell/configs --save-dev
npm install
```

## ESLint Usage
Add one of the following to your `package.json` file:
```json
  "eslintConfig": { "extends": "@ehubbell/configs/eslint-config-node" },
  "eslintConfig": { "extends": "@ehubbell/configs/eslint-config-web" },
```

## Prettier Usage
Add the following to your `package.json` file:
```json
  "prettier": "@ehubbell/configs/prettier-config",
```

## TSConfig Usage
Create a `tsconfig.json` file and add one of the following:

```json
{
  "extends": "@ehubbell/ts-config/web",
  "compilerOptions": {
    "baseUrl": "src",
    "rootDir": "."
  },
  "include": ["src"],
  "exclude": ["node_modules"]
}

```
```json
{
  "extends": "@ehubbell/ts-config/node",
  "compilerOptions": {
    "baseUrl": "src",
    "rootDir": "."
  },
  "include": ["src"],
  "exclude": ["node_modules"]
}

```

## Author
- [Eric Hubbell](http://www.erichubbell.com)
- eric@erichubbell.com

## Links
- https://archive.eslint.org/docs/developer-guide/shareable-configs
- https://prettier.io/docs/sharing-configurations
- https://www.typescriptlang.org/tsconfig/#extends
- https://dev.to/saiful7778/how-to-create-a-reusable-typescript-config-package-in-turborepo-3nh