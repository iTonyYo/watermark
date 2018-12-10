const watermark = require('../src/watermark');

(async () => {
  await watermark(
    './test/mark.png',
    './test/paper.png',
    {
      gap: 10,
      mark: {
        position: 'center',
        scale: 0.2,
        opacity: 1,
      },
      output: {
        filename: 'result.png',
        path: './test',
      },
    },
  );
})();
