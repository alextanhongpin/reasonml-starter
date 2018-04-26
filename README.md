# Basic Reason Template

Hello! This project allows you to quickly get started with Reason and BuckleScript. If you wanted a more sophisticated version, try the `react` template (`bsb -theme react -init .`).

# Build
```
npm run build
```

# Build + Watch

```
npm run start
```


# Editor
If you use `vscode`, Press `Windows + Shift + B` it will build automatically


# reasonml-starter

## Installation

```bash
$ npm install -g reason-cli@3.1.0-darwin
```

## Quickstart

```bash
$ npm install -g bs-platform  # provides the BuckleScript compiler
$ bsb -init my-first-app -theme basic-reason  # creates project my-first-app/
$ cd my-first-app
$ npm run build  # Compiles to src/Demo.bs.js using BuckleScript compiler
$ node src/Demo.bs.js  # Runs the demo using NodeJS
```