const execa = require('execa');

const { resolveApp } = require('./paths');
const scriptsDir = resolveApp('scripts');

execa('node', [
  `${scriptsDir}/clean-reports.js`
]);

execa('node', [
  `${scriptsDir}/clean-cache.js`
]);
