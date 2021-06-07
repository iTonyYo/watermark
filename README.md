[![Codacy Badge](https://api.codacy.com/project/badge/Grade/d739efe0c12f418ebebd4bbae4b82d20)](https://www.codacy.com/app/swzyocowboy/watermark?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=iTonyYo/watermark&amp;utm_campaign=Badge_Grade) [![Build Status](https://travis-ci.org/iTonyYo/watermark.svg?branch=master)](https://travis-ci.org/iTonyYo/watermark) [![Coverage Status](https://coveralls.io/repos/github/iTonyYo/watermark/badge.svg?branch=master)](https://coveralls.io/github/iTonyYo/watermark?branch=master)

# `@oopsunome/watermark`

给图片贴水印。

## 目录
- [安装](#安装)
- [使用](#使用)
    - [`watermark(mark, paper[, options])`](#watermarkmark-paper-options)
    - [示例](#示例)
- [相关](#相关)
- [支持的图片格式](#支持的图片格式)
- [参与开发](#参与开发)
- [贡献指南](#贡献指南)
- [证书](#证书)

## 安装

```shell
# 使用 NPM
$ npm i @oopsunome/watermark

# 使用 Yarn
$ yarn add @oopsunome/watermark
```

## 使用

#### `watermark(mark, paper[, options])`

- `mark` {String} 水印（暂时只支持图片水印）
- `paper` {String} 画布
- `options` {Object}
  - `gap` {Number} 水印与边界的距离, 当位置并非 `center` 时有效, **默认:** 8 像素
  - `mark` {Object}
    - `opacity` {Number} 水印透明度, **默认:** 0~1
    - `scale` {Number} 水印缩放比例, **默认:** 0~1
    - `position` {String|Object} 水印位置, `center` 表示水平 & 垂直居中，`top-left` 或 `left-top` 表示左上角，`top-right` 或 `right-top` 表示右上角，`bottom-right` 或 `right-bottom` 表示右下角，`bottom-left` 或 `left-bottom` 表示左下角，`{ x: 0, y: 0 }`, 表示完全手动配置水印位置
  - `output` {Object}
    - `filename` {String} 输出文件的名称，包括后缀
    - `path` {String} 默认 `process.cwd()`

#### 示例
```javascript
const watermark = require('@oopsunome/watermark');

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
```

## 相关
- [`@oopsunome/watermark-cli`][@oopsunome/watermark-cli] - 当前项目的命令行界面。

## 支持的图片格式

- [bmp](https://github.com/oliver-moran/jimp/blob/master/packages/type-bmp)
- [gif](https://github.com/oliver-moran/jimp/blob/master/packages/type-gif)
- [jpeg](https://github.com/oliver-moran/jimp/blob/master/packages/type-jpeg)
- [png](https://github.com/oliver-moran/jimp/blob/master/packages/type-png)
- [tiff](https://github.com/oliver-moran/jimp/blob/master/packages/type-tiff)

## 参与开发

**准备开发环境**

详细参见 [SETUP.md][SETUP.md]。

**安装依赖**

[`@oopsunome/watermark`][@oopsunome/watermark] 使用 [`Yarn`](https://yarnpkg.com/zh-Hans/) 包管理器，执行 `yarn install` 安装依赖。

**运行**

```shell
yarn start
```

**测试**

```shell
yarn test
```

## 贡献指南

仔细查阅 [CONTRIBUTING.md][贡献指南] 以了解详情。

## 证书

[`@oopsunome/watermark`][@oopsunome/watermark] 获得了 MIT 许可，仔细查阅 [LICENSE.md][证书] 以了解详情。



[贡献指南]: https://github.com/iTonyYo/watermark/blob/master/CONTRIBUTING.md
[证书]: https://github.com/iTonyYo/watermark/blob/master/LICENSE.md
[Node]: https://nodejs.org/
[@oopsunome/watermark]: https://github.com/iTonyYo/watermark
[@oopsunome/watermark-cli]: https://github.com/iTonyYo/watermark-cli
[SETUP.md]: #
