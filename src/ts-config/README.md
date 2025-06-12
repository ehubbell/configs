## Overview
A collection of Typescript configs for various projects.

## Installation
```
npm i @ehubbell/ts-config  --save-dev
```

## Usage
Create a `tsconfig.json` file and add the following:

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

Or...

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
- https://www.typescriptlang.org/tsconfig/#extends
- https://dev.to/saiful7778/how-to-create-a-reusable-typescript-config-package-in-turborepo-3nh
