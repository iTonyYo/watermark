const {
  resolve,
} = require('path');

const {
  realpathSync,
} = require('fs');

const workingDirectory = realpathSync(process.cwd());
const resolveWorkingDirectory = relativePath => resolve(workingDirectory, relativePath);

module.exports = {
  resolveWorkingDirectory,
  workingDirectory,
};
