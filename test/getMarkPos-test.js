import { realpathSync } from 'fs';
import { resolve } from 'path';

import { assert } from 'chai';
import Jimp from 'jimp';

import getMarkPos from '../src/getMarkPos';

const appDirectory = realpathSync(process.cwd());
const resolveCwd   = relativePath => resolve(appDirectory, relativePath);

setTimeout(async () => {
  const imgs = await Promise.all([
    Jimp.read(resolveCwd('test/mark.png')),
    Jimp.read(resolveCwd('test/paper.png')),
  ]);
  const jimpMark = imgs[0].scale(0.2);
  const jimpPaper = imgs[1];

  describe('获取水印位置', () => {

    it('左下角', () => {
      const { x, y } = getMarkPos({
        position: 'left-bottom',
        gap: 8,
        jimpPaper,
        jimpMark,
      });

      assert.deepEqual(
        {x, y},
        {x: 8, y: 143},
      );
    });

    it('右下角', () => {
      const { x, y } = getMarkPos({
        position: 'right-bottom',
        gap: 8,
        jimpPaper,
        jimpMark,
      });

      assert.deepEqual(
        {x, y},
        {x: 787, y: 143},
      );
    });

    it('左上角', () => {
      const { x, y } = getMarkPos({
        position: 'top-left',
        gap: 8,
        jimpPaper,
        jimpMark,
      });

      assert.deepEqual(
        {x, y},
        {x: 8, y: 8},
      );
    });

    it('右上角', () => {
      const { x, y } = getMarkPos({
        position: 'top-right',
        gap: 8,
        jimpPaper,
        jimpMark,
      });

      assert.deepEqual(
        {x, y},
        {x: 787, y: 8},
      );
    });

  });

  run();
}, 0);
