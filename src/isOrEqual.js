const isEqual = require('lodash/isEqual');

module.exports = (object, cond1, cond2) => (
  isEqual(object, cond1) || isEqual(object, cond2)
);
