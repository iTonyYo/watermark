# 参与贡献

首先，感谢你考虑为 [`@oopsunome/watermark`][@oopsunome/watermark] 做出贡献！正是像您这样的人，使得 [`@oopsunome/watermark`][@oopsunome/watermark] 成为一个非常好的工具。:tada::+1:

[@oopsunome/watermark]: https://github.com/iTonyYo/watermark

遵循这些原则有助于传达您对其它开发人员时间上的尊重。作为回报，他们会及时解决您的问题、评估更改和帮助您最终确定 pull 请求等方面。

## 行为准则

请报告不可接受的行为至 [swzyocowboy@icloud.com][mailto]。

[mailto]: mailto:swzyocowboy@icloud.com

## 指南

### Git 提交信息

提交信息应该清晰描述修改了什么以及其原因。

#### 原因

- 自动生成更新日志
- 查看简单的、与产品密切相关的提交历史（如，忽略工程方面的提交日志）

#### 第一行信息
- 概述修改了什么
- 少于 25 个汉字
- 可以的话精确指向到某个函数名等

#### 其它行信息
- 更详细地解释修改的原因
- 保持列款短于 72 字左右
- 分段

#### 示例
```shell
git commit -m 'feat(新功能): 初始提交首页'
```

#### 完整示例

```txt
feat(新功能): 一个新功能

更详细地解释事情，可能是一些关于这个问题的背景，等等。

提交消息的主体可以是几个段落，请适当自动换行，并保持列款短于 72 字左右。
这样，Git 日志展示的东西是有缩进的。

修复: https://github.com/nodejs/node/issues/1337
关联: http://eslint.org/docs/rules/space-in-parens.html
```

#### 修改的主题

**新功能**，:tada:
```shell
新功能: :tada: 一个新功能
```

**变更**，:m:
```shell
变更: :m: 对现有功能的变更。
```

**弃用**，:man_zombie:
```shell
弃用: :man_zombie: 已经不建议使用，准备很快移除的功能。
```

**安全**，:shield:
```shell
安全: :shield: 对安全的新增、改进、修改等。
```

**修复**，:bug:
```shell
修复: :bug: 一个问题的修复
```

**文档**，:memo:
```shell
文档: :memo: 更新文档
```

**格式**，:tshirt:
```shell
格式: :tshirt: 对业务逻辑等无意义、无影响的修改，诸如：格式、标点符号、linter 等
```

**重构**，:jack_o_lantern:
```shell
重构: :jack_o_lantern: 更新了算法、解决方案等属性的修改
```

**性能**，:racehorse:
```shell
性能: :racehorse: 提升性能的更改
```

**测试**，:white_check_mark:
```shell
测试: :white_check_mark: 测试用例的增、删、改
```

**工程**，:clapper:
```shell
工程: :clapper: 自动化管道、配置、依赖、运行时等修改
```

**移除**，:fire:
```shell
移除: :fire: 功能 / 代码 / 文件等的移除
```

#### 可补充使用的 Emoji

* :beginner: `:beginner:` 第一次提交
* :penguin: `:penguin:` 修复在 Linux 上的问题
* :apple: `:apple:` 修复在 macOS 上的问题
* :checkered_flag: `:checkered_flag:` 修复在 Windows
 上的问题
* :green_heart: `:green_heart:` 修复持续集成工具的报错
* :arrow_up: `:arrow_up:` 升级依赖
* :arrow_down: `:arrow_down:` 降级依赖

此外，工程当前严格遵守 [Conventional Commits 1.0.0-beta.1](https://conventionalcommits.org/) 提交公约并借助 [standard-version](https://github.com/conventional-changelog/standard-version)
 自动生成更新日志。
