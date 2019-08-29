/**
 * await watermark(mark, paper, options);
 *
 * options,
 * - gap, 设置水印与边界的距离，当位置并非 `center` 时有效
 * - mark, 设置水印
 *   - opacity, 0~1, 设置水印透明度
 *   - scale, 0~1, 设置水印缩放比例
 *   - position, 设置水印位置
 *     - center
 *     - top-left | left-top, 左上角
 *     - top-right | right-top, 右上角
 *     - bottom-right | right-bottom, 右下角
 *     - bottom-left | left-bottom, 左上角
 *     - { x: 0, y: 0 }, 完全自定义水印位置
 * - output, 添加好水印的图片存储位置
 *     - filename, 指定输出文件的名称，包括后缀
 *     - path, 默认 `process.cwd()`
 */
const { join, extname } = require('path');

const Jimp = require('jimp');
const merge = require('lodash/merge');
const debug = require('debug');

const getMarkPos = require('./getMarkPos');

const log = debug('WATERMARK:log');

module.exports = async function watermark(mark, paper, options) {
  const opts = merge({}, {
    gap: 8,
    mark: {
      position: 'bottom-right',
      scale: 1,
      opacity: 1,
    },
    output: {
      filename: `output${extname(paper)}`,
      path: process.cwd(),
    },
  }, options);

  log(`水印距离边界：${opts.gap}px`);
  log(`水印位置：'${opts.mark.position}'`);
  log(`水印缩放：${opts.mark.scale}`);
  log(`水印透明度：${opts.mark.opacity}`);
  log(`输出位置：${opts.output.path}/${opts.output.filename}`);

  const imgs = await Promise.all([
    Jimp.read(mark),
    Jimp.read(paper),
  ]);

  const jimpMark = imgs[0].scale(opts.mark.scale);
  const jimpPaper = imgs[1];

  const { x, y } = getMarkPos({
    position: opts.mark.position,
    gap: opts.gap,
    jimpPaper,
    jimpMark,
  });

  jimpPaper
    .composite(
      jimpMark,
      x,
      y,
      {
        mode: Jimp.BLEND_SOURCE_OVER,
        opacitySource: opts.mark.opacity,
        opacityDest: 1,
      },
    )
    .write(
      join(
        opts.output.path,
        `${opts.output.filename}`,
      ),
    );
};
