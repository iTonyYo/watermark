const trash = require('trash');
const { resolveCwd } = require('./paths');

trash([
  resolveCwd('.eslintcache'),
]);
