# `watermark`

给图片贴水印。

> 暂时仅支持图片水印。

## 目录
- [目录](#目录)
- [安装](#安装)
- [使用](#使用)
    - [`watermark(mark, paper, options)`](#watermarkmark-paper-options)
    - [示例](#示例)
- [参与开发](#参与开发)
- [贡献指南](#贡献指南)
- [证书](#证书)
- [待办](#待办)

## 安装

```shell
# 使用 NPM
npm install watermark

# 使用 Yarn
yarn add watermark
```

## 使用

#### `watermark(mark, paper, options)`

| 属性    | 必须 | 描述                             | 类型   |
| ------- | ---- | -------------------------------- | ------ |
| mark    | ✓         | 水印（暂时只支持图片形式的水印） | String |
| paper   | ✓            | 指定贴水印的图片                 | String |
| options |      | 选项（详细配置参见接下来的介绍） | Object |

**`options`**

| 属性   | 描述                                             | 类型   |
| ------ | ------------------------------------------------ | ------ |
| gap    | 配置水印与边界的距离，当位置并非 `center` 时有效 | Number |
| mark   | 配置水印（详细配置参见下面的介绍）               | Object |
| output | 配置输出位置（详细配置参见下面的介绍）                   | Object |

**`mark`**

| 属性     | 描述                                                                                                                                                                                                                                                       | 类型   |
| -------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------ |
| opacity  | `0~1`, 配置水印透明度                                                                                                                                                                                                                                      | Number |
| scale    | `0~1`, 配置水印缩放比例                                                                                                                                                                                                                                    | Number |
| position | 配置水印位置, `center` 表示水平 & 垂直居中，`top-left` 或 `left-top` 表示左上角，`top-right` 或 `right-top` 表示右上角，`bottom-right` 或 `right-bottom` 表示右下角，`bottom-left` 或 `left-bottom` 表示左下角，`{ x: 0, y: 0 }`, 表示完全手动配置水印位置 | String |

**`output`**

| 属性     | 描述                         | 类型   |
| -------- | ---------------------------- | ------ |
| filename | 指定输出文件的名称，包括后缀 | String |
| path     | 默认 `process.cwd()`         | String |

#### 示例
```javascript
const watermark = require('watermark');

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

## 参与开发

**准备开发环境**

详细参见 [SETUP.md]()。

**安装依赖**

[`watermark`]() 使用 [`Yarn`](https://yarnpkg.com/zh-Hans/) 包管理器，执行 `yarn install` 安装依赖。

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

[`watermark`][watermark] 获得了 MIT 许可，仔细查阅 [LICENSE.md][证书] 以了解详情。

## 待办

- [ ] 开发的时候使用 `ES 6/7`，支持构建 `ES 5` 模式的模块；
- [X] 功能测试；
- [X] 捆绑 [Git 倒钩](https://github.com/typicode/husky)；
- [X] ESlint 检测；
- [X] 生成所有依赖的开源证书；
- [ ] 更新日志
- [ ] 谁在使用 [`watermark`][watermark]
- [ ] 完善 [贡献指南][贡献指南]
- [ ] 使用 [David DM](https://david-dm.org/) 实现 `依赖是否最新` 检测；
- [ ] 使用 [Travis CI](https://travis-ci.org/) 实现持续集成；
- [ ] 使用 [Coveralls](https://coveralls.io/) 可视化测试用例覆盖率；
- [ ] 使用 [Codacy](https://www.codacy.com/) 实现代码质量检测；
- [ ] 编写 [`SETUP.md`]()；
- [ ] 文档：在哪里可以获得更多帮助？
- [ ] 文档：设计思想
- [ ] 文档：维护策略
- [ ] 性能测试；
- [ ] 
[贡献指南]: #
[证书]: #
[Node]: https://nodejs.org/
[watermark]: #
