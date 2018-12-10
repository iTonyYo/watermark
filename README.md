# `watermark`

## 目录

- [`watermark(mark, paper, options)`](#watermarkmark-paper-options)
- [快速开始](#快速开始)

## `watermark(mark, paper, options)`

| 属性    | 必须 | 描述                             | 类型   |
| ------- | ---- | -------------------------------- | ------ |
| mark    | ✓    | 水印（暂时只支持图片形式的水印） | String |
| paper   | ✓    | 指定贴水印的图片                 | String |
| options |      | 选项（详细设置参见接下来的介绍） | Object |

**`options`**
| 属性   | 必须 | 描述                                             | 类型   |
| ------ | ---- | ------------------------------------------------ | ------ |
| gap    |      | 设置水印与边界的距离，当位置并非 `center` 时有效 | Number |
| mark   |      | 设置水印（详细设置参见下面的介绍）               | Object |
| output |      | 选项（详细设置参见下面的介绍）                   | Object |

**`mark`**
| 属性     | 必须 | 描述                                                                                                                                                                                                                                                       | 类型   |
| -------- | ---- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------ |
| opacity  |      | `0~1`, 设置水印透明度                                                                                                                                                                                                                                      | Number |
| scale    |      | `0~1`, 设置水印缩放比例                                                                                                                                                                                                                                    | Number |
| position |      | 设置水印位置, `center` 表示水平 & 垂直居中，`top-left` 或 `left-top` 表示左上角，`top-right` 或 `right-top` 表示右上角，`bottom-right` 或 `right-bottom` 表示右下角，`bottom-left` 或 `left-bottom` 表示左下角，`{ x: 0, y: 0 }`, 表示完全手动设置水印位置 | String |

**`output`**
| 属性     | 必须 | 描述                         | 类型   |
| -------- | ---- | ---------------------------- | ------ |
| filename |      | 指定输出文件的名称，包括后缀 | String |
| path     |      | 默认 `process.cwd()`         | String |

**示例**
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

## 快速开始

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
