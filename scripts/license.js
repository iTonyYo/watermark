#!/usr/bin/env node
'use strict';

const { join }        = require('path');
const licenseChecker  = require('license-checker');
const makeDir         = require('make-dir');
const writeFileAtomic = require('write-file-atomic');
const chalk           = require('chalk');

const { appDirectory, docsPath } = require('./paths');

/**
 * 异步保存报告，
 *  - 保存的位置是否存在
 *  - 保存文件
 *
 * @params {Object} csv - CSV 数据
 * @params {String} to - 保存的位置
 * @params {String} fileName - 报告文件名称
 */
const saveCSV  = ({csv, to, fileName}) => {
  makeDir(to)
    .then(path => {
        writeFileAtomic(
          join(to, fileName),
          `${licenseChecker.asCSV(csv)}\n`,
          {},
          (err) => {
            if (!err) {
              console.log(`
                ${chalk.green.bold(`${fileName}`)}
                ${chalk.dim('保存在: ') + chalk.blueBright(path)}
              `);

              return;
            }

            throw err;
          }
        );
      })
    .catch(err => {
      throw err;
    });
};

/**
 * 生成 package.json 文件中 "dependencies" 依赖证书报告
 */
licenseChecker.init({
  start:       appDirectory,
  production:  false,
  development: true,
}, (err, data) => {
  if (err) {
    throw err;
  } else {
    saveCSV({
      csv     : data,
      to      : docsPath,
      fileName: 'licenses-development.csv',
    });
  }
});

/**
 * 生成 package.json 文件中 "devDependencies" 依赖证书报告
 */
licenseChecker.init({
  start:       appDirectory,
  production:  true,
  development: false,
}, (err, data) => {
  if (err) {
    throw err;
  } else {
    saveCSV({
      csv     : data,
      to      : docsPath,
      fileName: 'licenses-production.csv',
    });
  }
});
