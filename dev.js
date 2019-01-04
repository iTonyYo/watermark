import { realpathSync } from 'fs';
import { resolve } from 'path';

const appDirectory = realpathSync(process.cwd());
const resolveApp = relativePath => resolve(appDirectory, relativePath);

const watermark = require('./src/watermark');

(async () => {
  await watermark(
    resolveApp('test/mark.png'),
    resolveApp('test/paper.png'),
    {
      gap: 10,
      mark: {
        position: 'center',
        scale: 0.2,
        opacity: 1,
      },
      output: {
        filename: 'result.png',
        path: resolveApp('test'),
      },
    },
  );
})();
