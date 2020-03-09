# node-utils

[![npm version](https://badge.fury.io/js/node-utils.svg)](https://badge.fury.io/js/node-utils) [![CircleCI](https://circleci.com/gh/dwmkerr/node-utils.svg?style=shield)](https://circleci.com/gh/dwmkerr/node-utils) [![AppVeyor Build Status](https://ci.appveyor.com/api/projects/status/3e334rknhjbpx555?svg=true)](https://ci.appveyor.com/project/dwmkerr/node-utils) [![codecov](https://codecov.io/gh/dwmkerr/node-utils/branch/master/graph/badge.svg)](https://codecov.io/gh/dwmkerr/node-utils) [![dependencies Status](https://david-dm.org/dwmkerr/node-utils/status.svg)](https://david-dm.org/dwmkerr/node-utils) [![devDependencies Status](https://david-dm.org/dwmkerr/node-utils/dev-status.svg)](https://david-dm.org/dwmkerr/node-utils?type=dev) [![GuardRails badge](https://badges.guardrails.io/dwmkerr/node-utils.svg?token=569f2cc38a148f785f3a38ef0bcf5f5964995d7ca625abfad9956b14bd06ad96&provider=github)](https://dashboard.guardrails.io/default/gh/dwmkerr/node-utils) [![Greenkeeper badge](https://badges.greenkeeper.io/dwmkerr/node-utils.svg)](https://greenkeeper.io/) [![Conventional Commits](https://img.shields.io/badge/Conventional%20Commits-1.0.0-yellow.svg)](https://conventionalcommits.org)

Basic Node.js utility functions. Complements the standard library, no dependencies.

<!-- vim-markdown-toc GFM -->

* [Introduction](#introduction)
* [Installation](#installation)
* [Developer Guide](#developer-guide)
    * [Initial Setup](#initial-setup)
    * [Running Tests](#running-tests)
    * [Commit Messages](#commit-messages)
    * [Creating a Release](#creating-a-release)
    * [Builds](#builds)

<!-- vim-markdown-toc -->

## Introduction

Basic utility functions which complement the standard library. Mostly used in my own projects.

## Installation

Install with:

```bash
npm install -g @dwmkerr/node-utils
```

Then important use functions as needed.

```node
import { deleteIfExists } = require('@dwmkerr/node-utils');
```

## Developer Guide

The only dependencies are Node LTS (or above).

Useful commands for development are:

| Command              | Usage                                                                                    |
|----------------------|------------------------------------------------------------------------------------------|
| `npm test`           | Runs the unit tests.                                                                     |
| `npm run test:debug` | Runs the tests in a debugger. Combine with `.only` and `debugger` for ease of debugging. |
| `npm run cov`        | Runs the tests, writing coverage reports to `./artifacts/coverage`.                      |

Currently the linting style is based on [airbnb](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb). Run `npm run lint` to lint the code.

### Initial Setup

Install the dependencies (I recommend [Node Version Manager](https://github.com/creationix/nvm)):

```bash
nvm install --lts
nvm use --lts
git clone git@github.com:dwmkerr/node-utils.git
cd node-utils
npm install && npm test
```

### Running Tests

Run the tests with:

```bash
npm test
```

Tests are executed with [Mocha](https://mochajs.org/) and coverage is handled by [Istanbul](https://github.com/gotwarlost/istanbul). Coverage reports are written to an `./artifacts` folder.

Note that best practices are to pass Mocha a quoted string with a glob pattern for cross-platform execution of tests (see [Mocha Docs](https://mochajs.org/#the-test-directory)). However for some reason on AppVeyor this doesn't seem to work. Leaving the pattern unquoted works for `cmd` as well as the shell in builds for now. So please be careful if changing the quotes and test on both platforms.

### Commit Messages

[Conventional Commits](https://www.conventionalcommits.org) should be used. This allows the CHANGELOG to be kept up to date automatically, and ensures that semantic versioning can be expected from the library.

### Creating a Release

To create a release.

- Merge your work to master.
- Use `npm run release`.
- Push and deploy `git push --tags && git push && npm publish`

Note that `semantic-version` is used, meaning a changelog is automatically kept up to date, and versioning is handled semantically based on the commit message.

### Builds

Builds are run on CircleCI. You can run the CircleCI build locally with the following command:

```
make circleci
```
