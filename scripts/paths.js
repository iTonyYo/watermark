const { realpathSync } = require('fs');
const { resolve }      = require('path');

const appDirectory = realpathSync(process.cwd());
const resolveApp   = relativePath => resolve(appDirectory, relativePath);

module.exports = {
  appDirectory,
  resolveApp
};
