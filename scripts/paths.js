const { realpathSync } = require('fs');
const { resolve }      = require('path');

const appDirectory = realpathSync(process.cwd());
const resolveCwd   = relativePath => resolve(appDirectory, relativePath);

module.exports = {
  appDirectory,
  resolveCwd,
  docsPath: resolveCwd('docs'),
};
