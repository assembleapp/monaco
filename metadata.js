(function () {

  var METADATA = {
    CORE: {
      paths: {
        src: '/vscode/out/vs',
        'npm/dev': 'node_modules/monaco-editor-core/dev/vs',
        'npm/min': 'node_modules/monaco-editor-core/min/vs',
        built: '/vscode/out-monaco-editor-core/min/vs',
        releaseDev: 'release/dev/vs',
        releaseMin: 'release/min/vs',
      }
    },

    PLUGINS: [
      {
        name: 'monaco-json',
        contrib: 'vs/language/json/monaco.contribution',
        modulePrefix: 'vs/language/json',
        paths: {
          src: '/monaco-json/release/dev',
          'npm/dev': 'node_modules/monaco-json/release/dev',
          'npm/min': 'node_modules/monaco-json/release/min',
          esm: 'node_modules/monaco-json/release/esm',
        }
      },
    ]
  }

  if (typeof exports !== 'undefined') {
    exports.METADATA = METADATA
  } else {
    self.METADATA = METADATA;
  }

})();
