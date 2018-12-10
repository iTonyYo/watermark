const Listr = require('listr');
const execa = require('execa');

const { resolveApp } = require('./paths');
const scriptsDir = resolveApp('scripts');

const tasks = new Listr([
  {
    title: '清理测试报告等',
    task: () => execa('node', [
      `${scriptsDir}/clean-reports.js`
    ])
  },

  {
    title: '清理缓存',
    task: () => execa('node', [
      `${scriptsDir}/clean-cache.js`
    ])
  },

  {
    title: '清理包',
    task: () => execa('node', [
      `${scriptsDir}/clean-packages.js`
    ])
  },

  {
    title: '安装包',
    task: () => execa('yarn', [
      'install'
    ])
  },

  {
    title: '生成包的证书报告',
    task: () => execa('yarn', [
      'license'
    ])
  },
]);

tasks.run().catch((err) => {
  throw err;
});
