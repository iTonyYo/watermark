const trash = require('trash');
const { resolveApp } = require('./paths');

trash([
  resolveApp('.eslintcache'),
]);
