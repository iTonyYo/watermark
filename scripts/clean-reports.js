const trash          = require('trash');
const { resolveCwd } = require('./paths');

trash([
  resolveCwd('yarn-error.log'),
  resolveCwd('.nyc_output'),
  resolveCwd('coverage'),
  resolveCwd('docs/coverage'),
  resolveCwd('licenses-development.csv '),
  resolveCwd('licenses-production.csv'),
  resolveCwd('docs/licenses-development.csv '),
  resolveCwd('docs/licenses-production.csv'),
]);
