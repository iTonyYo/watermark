const execa = require('execa');

const { resolveApp } = require('./paths');
const scriptsDir = resolveApp('scripts');

(async () => {
  await execa('node', [
    `${scriptsDir}/clean-reports.js`
  ]);

  await execa('node', [
    `${scriptsDir}/clean-cache.js`
  ]);
})();
