# Monaco

[![Build Status](https://dev.azure.com/ms/monaco-editor/_apis/build/status/microsoft.monaco-editor?label=website)](https://dev.azure.com/ms/monaco-editor/_build/latest?definitionId=3)

Monaco powers [VS Code](https://github.com/Microsoft/vscode).
Please note that this repository contains no source code for the code editor;
only packages and ships `monaco-editor` module.

![image](https://cloud.githubusercontent.com/assets/5047891/19600675/5eaae9e6-97a6-11e6-97ad-93903167d8ba.png)

## Try it out

Try the editor out [on our website](https://microsoft.github.io/monaco-editor/index.html).

## Installing

```
$ npm install monaco-editor
```

You will get:
* inside `esm`: ESM version of the editor (compatible with e.g. webpack)
* inside `dev`: AMD bundled, not minified
* inside `min`: AMD bundled, and minified
* inside `min-maps`: source maps for `min`
* `monaco.d.ts`: this specifies the API of the editor (this is what is actually versioned, everything else is considered private and might break with any release).

It is recommended to develop against the `dev` version, and in production to use the `min` version.

## Documentation

* learn [samples](https://github.com/Microsoft/monaco-editor-samples/).

    * [AMD version](./docs/amd.md).
    * [AMD domains](./docs/amd-domains.md)
    * [ESM version](./docs/esm.md)

* Use [playground](https://microsoft.github.io/monaco-editor/playground.html).
* Read [a guide](https://github.com/Microsoft/monaco-editor/wiki/Accessibility-Guide-for-Integrators)
  or [`monaco.d.ts`](https://github.com/Microsoft/monaco-editor/blob/master/website/playground/monaco.d.ts.txt).

* [Monarch playground](https://microsoft.github.io/monaco-editor/monarch.html).
* grammars: [oniguruma](https://github.com/kkos/oniguruma), a regular expression library
* v8 engine and web assembly
