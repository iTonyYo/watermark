import { realpathSync } from 'fs';
import { resolve } from 'path';

const appDirectory = realpathSync(process.cwd());
const resolveCwd = (relativePath) => resolve(appDirectory, relativePath);

const watermark = require('./src/watermark');

(async () => {
  await watermark(
    resolveCwd('test/mark.png'),
    resolveCwd('test/paper.png'),
    {
      gap: 10,
      mark: {
        position: 'center',
        scale: 0.2,
        opacity: 1,
      },
      output: {
        filename: 'result.png',
        path: resolveCwd('test'),
      },
    },
  );
})();
