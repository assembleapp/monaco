Corresponding packages are described by `metadata.js`.

> All folders must be cloned as siblings.

| repository | npm module | explanation |
|------------|------------|-------------|
| [vscode](https://github.com/Microsoft/vscode) | [monaco-editor-core](https://www.npmjs.com/package/monaco-editor-core) | editor core functionality (language agnostic) is shipped out of vscode. |
| [monaco-json](https://github.com/Microsoft/monaco-json) | [monaco-json](https://www.npmjs.com/package/monaco-json) | plugin that adds rich language support for JSON. |
| [monaco-languages](https://github.com/Microsoft/monaco-languages) | [monaco-languages](https://www.npmjs.com/package/monaco-languages) | plugin that adds colorization and basic supports for dozens of languages. |

* clone vscode-loc repository for localized string resources
* clone VS Code repository

```bash
/src> git clone https://github.com/microsoft/vscode-loc
/src> git clone https://github.com/microsoft/vscode
/src/vscode> yarn
/src/vscode> yarn run watch
```

* clone monaco (note the folders must be siblings!)
* install npm deps for monaco
* start a local http server in the background

```bash
/src> git clone https://github.com/assembleapp/monaco
/src/monaco> npm install .
/src/monaco> npm run now
```

Open [http://localhost:8080/monaco-editor/test/?editor=src](http://localhost:8080/monaco-editor/test/?editor=src) to run.

* compile daemon

```bash
/src> git clone https://github.com/Microsoft/monaco-json
/src/monaco-json> npm install .
/src/monaco-json> npm run watch
```

Open <http://localhost:8080/monaco-editor/test/?editor=src&monaco-json=src>.

## Run Once

```bash
/src/vscode> npm run monaco-editor-test
```

or page <http://localhost:8080/monaco-editor/test/?editor=src>.

> panel in corner decides source, npm or local release:
![image](https://cloud.githubusercontent.com/assets/5047891/19599080/eb0d7622-979e-11e6-96ce-dde98cd95dc1.png)

## Run local

* open http://localhost:8080/monaco/website/
* build the website
* open http://localhost:8080/monaco-website/

```bash
/src/monaco> npm run release
/src/monaco> npm run build-website
```

---

## Shipping a new monaco npm module

#### 1. Ship a new `monaco-core` npm module

* bump version in `/src/vscode/build/monaco/package.json`
* **[important]** push all local changes to the remote to get a good public commit id.
* generate npm package `/src/vscode> node_modules/.bin/gulp editor-distro`
* publish npm package `/src/vscode/out-monaco-editor-core> npm publish`

#### 2. Adopt new `monaco-editor-core` in plugins
* if there are breaking API changes that affect the language plugins, adopt the new API in:

  * [repo - monaco-typescript](https://github.com/Microsoft/monaco-typescript)
  * [repo - monaco-languages](https://github.com/Microsoft/monaco-languages)
  * [repo - monaco-css](https://github.com/Microsoft/monaco-css)
  * [repo - monaco-json](https://github.com/Microsoft/monaco-json)
  * [repo - monaco-html](https://github.com/Microsoft/monaco-html)

* publish new versions of those plugins to npm as necessary.

#### 3. Update package.json
* edit `/src/monaco/package.json` and update the version (as necessary):

  * [npm - monaco-editor-core](https://www.npmjs.com/package/monaco-editor-core)
  * [npm - monaco-typescript](https://www.npmjs.com/package/monaco-typescript)
  * [npm - monaco-languages](https://www.npmjs.com/package/monaco-languages)
  * [npm - monaco-css](https://www.npmjs.com/package/monaco-css)
  * [npm - monaco-json](https://www.npmjs.com/package/monaco-json)
  * [npm - monaco-html](https://www.npmjs.com/package/monaco-html)

* **[important]** fetch latest deps by running `/src/monaco-editor> npm install .`

#### 4. Generate and try out the local release

* `/src/monaco> npm run release`
* try as many test pages as you think are relevant. e.g.:

  * open `http://localhost:8080/monaco-editor/test/?editor=releaseDev`
  * open `http://localhost:8080/monaco-editor/test/?editor=releaseMin`
  * open `http://localhost:8080/monaco-editor/test/smoketest.html?editor=releaseDev`
  * open `http://localhost:8080/monaco-editor/test/smoketest.html?editor=releaseMin`

#### 5. Publish

* `/src/monaco> npm version minor`
* `/src/monaco/release> npm publish`
* `/src/monaco> git push --tags`
