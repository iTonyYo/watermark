import { realpathSync } from 'fs';
import { resolve } from 'path';

import { assert } from 'chai';
import Jimp from 'jimp';

import width from '../src/width';

const appDirectory = realpathSync(process.cwd());
const resolveCwd   = relativePath => resolve(appDirectory, relativePath);

setTimeout(async () => {
  const imgs = await Promise.all([
    Jimp.read(resolveCwd('test/mark.png')),
    Jimp.read(resolveCwd('test/paper.png')),
  ]);
  const jimpMark = imgs[0].scale(0.2);
  const jimpPaper = imgs[1];

  describe('获取图片宽度', () => {

    it('水印', () => {
      assert.equal(width(jimpMark), 93);
    });

    it('画布', () => {
      assert.equal(width(jimpPaper), 888);
    });

  });

  run();
}, 0);
