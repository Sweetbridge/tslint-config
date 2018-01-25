# TSLint Config Sweetbridge

[![NPM version](https://img.shields.io/npm/v/@sweetbridge/tslint-config-sweetbridge.svg?style=flat)](https://npmjs.org/package/@sweetbridge/tslint-config-sweetbridge)


> A [TSLint config](https://palantir.github.io/tslint/usage/tslint-json/) for [JavaScript Standard Style](http://standardjs.com/)

This is a tiny wrapper around [tslint-config-standard](https://www.npmjs.com/package/tslint-config-standard) which sets down:

* max line length to 96
* approves function parameters indentation based on the position of the first parameter

## Installation

```sh
npm install tslint-config-sweetbridge --save-dev
```

## Usage

Create `tslint.json` file next to your `package.json` (project root):

```json
{
  "extends": "tslint-config-sweetbridge"
}
```

**P.S.** Some TSLint rules may require the use of `--project`.

### Rules

* [TSLint](https://www.npmjs.com/package/tslint)
* [TSLint ESLint Rules](https://www.npmjs.com/package/tslint-eslint-rules)
* [TSLint Standard Rules](https://github.com/blakeembrey/tslint-config-standard/blob/master/tslint.js)

## License

Apache 2.0
