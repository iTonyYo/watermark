import { realpathSync } from 'fs';
import { resolve } from 'path';

import { assert } from 'chai';
import Jimp from 'jimp';

import height from '../src/height';

const appDirectory = realpathSync(process.cwd());
const resolveCwd   = relativePath => resolve(appDirectory, relativePath);

setTimeout(async () => {
  const imgs = await Promise.all([
    Jimp.read(resolveCwd('test/mark.png')),
    Jimp.read(resolveCwd('test/paper.png')),
  ]);
  const jimpMark = imgs[0].scale(0.2);
  const jimpPaper = imgs[1];

  describe('获取图片高度', () => {

    it('水印', () => {
      assert.equal(height(jimpMark), 37);
    });

    it('画布', () => {
      assert.equal(height(jimpPaper), 188);
    });

  });

  run();
}, 0);
