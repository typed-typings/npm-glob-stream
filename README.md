# Typed glob-stream
[![Build Status](https://travis-ci.org/types/npm-glob-stream.svg?branch=master)](https://travis-ci.org/types/npm-glob-stream)

Typescript Typings for [glob-stream](https://www.npmjs.com/package/glob-stream).

## Installation
```sh
typings install --save glob-stream
```

## Usage

```ts
read = gs.create('./files/**/*.coffee',  { /* options */ });

read.on('data', (file: gs.Element) => {
  console.log(file.path, file.base, file.cwd);
});

```


## Contributing
You can run them the tests with `npm run build` and `npm run test`.

--------------------------------

_Based on typings by [Bart van der Schoor](https://github.com/Bartvds)
