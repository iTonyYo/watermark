const {
  isEqual,
  isEmpty,
  isPlainObject,
} = require('lodash');

const width = require('./width');
const height = require('./height');
const isOrEqual = require('./isOrEqual');

module.exports = ({
  position,
  gap,
  jimpPaper,
  jimpMark,
}) => {
  if (isEmpty(position)) {
    return {
      x: 0,
      y: 0,
    };
  }

  if (isPlainObject(position)) {
    return position;
  }

  if (isOrEqual(position, 'top-left', 'left-top')) {
    return {
      x: gap,
      y: gap,
    };
  }

  const paperWidth = width(jimpPaper);
  const paperHeight = height(jimpPaper);

  const markWidth = width(jimpMark);
  const markHeight = height(jimpMark);

  if (isOrEqual(position, 'top-right', 'right-top')) {
    return {
      x: paperWidth - markWidth - gap,
      y: gap,
    };
  }

  if (isOrEqual(position, 'bottom-right', 'right-bottom')) {
    return {
      x: paperWidth - markWidth - gap,
      y: paperHeight - markHeight - gap,
    };
  }

  if (isOrEqual(position, 'bottom-left', 'left-bottom')) {
    return {
      x: gap,
      y: paperHeight - markHeight - gap,
    };
  }

  if (isEqual(position, 'center')) {
    return {
      x: paperWidth / 2 - markWidth / 2,
      y: paperHeight / 2 - markHeight / 2,
    };
  }

  throw Error('必须为水印提供正确的摆放位置');
};
