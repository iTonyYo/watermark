const execa = require('execa');

const { resolveCwd } = require('./paths');
const scriptsDir = resolveCwd('scripts');

(async () => {
  await execa('node', [
    `${scriptsDir}/clean-reports.js`
  ]);

  await execa('node', [
    `${scriptsDir}/clean-cache.js`
  ]);
})();
