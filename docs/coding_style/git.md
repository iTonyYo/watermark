# Git

## 目录

- [托管](#托管)
- [配置](#配置)
- [命名](#命名)
- [Git 日志](#git-日志)
- [工作流](#工作流)
- [提交信息](#提交信息)
- [提交主题](#提交主题)

## 托管

使用 Github 托管私有项目。

## 配置
参见 [Better Git configuration](https://blog.scottnonnenberg.com/better-git-configuration/)。

## 命名

分支命名参考匈牙利命名法，单词都小写，单词之间用连字符连结。

## Git 日志

[更新日志绝对不应该是 Git 日志的堆砌物](https://keepachangelog.com/zh-CN/1.0.0/)，更好地维护更新日志。

## 工作流

[Gitflow](http://nvie.com/posts/a-successful-git-branching-model/)。

## 提交信息

根据 [约定式提交 1.0.0-beta.2 公约](https://www.conventionalcommits.org/zh/v1.0.0-beta.2/) 、[Git 表情公约](https://gitmoji.carloscuesta.me/) 改编。提交信息应该清晰描述修改了什么以及其原因。

**概述**
- 概述修改了什么
- 少于 25 个汉字
- 可以的话精确指向到某个函数名等

**补充描述**
- 更详细地解释修改的原因
- 保持列款短于 72 字左右
- 分段

**示例**

```shell
git commit -m '新功能: :tada: 一个新功能' -m '初始提交首页'
```

## 提交主题

> 总的来说不区分工程、核心业务，除非是各自专门针对的维度。

> 增、删、改（重构、配置、升级、降级、回退、优化、提升、优化、国际化）、查的行为不需要通过表情体现，仅体现维度。

> 弃用，指：不建议使用，准备很快移除。

> 标签应避免特指某个系统、工具、平台等。

**功能**
```shell
# 增 / 删 / 改 / 弃用功能
功能: :gear:

# 增 / 删 / 改 / 弃用前后不兼容的功能
功能: :boom:
```

**修复**
```shell
# 修复问题
修复: :bug:

# 关键的热修复补丁。
补丁: :ambulance:
```

**文字**
```shell
# 增 / 删 / 改 / 弃用文档
文档: :memo:

# 增 / 删 / 改 / 弃用源码注释
注释: :bulb:

# 增 / 删 / 改 / 弃用文案
文案: :speech_balloon:

# 增 / 删 / 改 / 弃用文案
证书: :page_facing_up:
```

**安全**
```shell
# 增 / 删 / 改 / 弃用安全措施
安全: :shield:
```

**性能**
```shell
# 增 / 删 / 改 / 弃用性能措施
性能: :racehorse:
```

**皮肤**
```shell
# 增 / 删 / 改 / 弃用皮肤
皮肤: :lipstick:
```

**测试**
```shell
# 增 / 删 / 改 / 弃用测试用例
测试: :white_check_mark:
```

**架构**
```shell
# 架构的修改，无论工程亦或是核心业务。
架构: :building_construction:
```

**重构**
```shell
# 大范围架构的修改，无论工程亦或是核心业务。
重构: :recycle:
```

**可访问性**
```shell
# 增 / 删 / 改 / 弃用可访问性措施。
可访问性: :wheelchair:
```

**体验**
```shell
# 增 / 删 / 改 / 弃用用户体验 / 可使用性措施。
体验: :children_crossing:
```

**数据库**
```shell
# 增 / 删 / 改 / 弃用数据库。
数据库: :children_crossing:
```

**监控**
```shell
# 增 / 删 / 改 / 弃用分析 / 追踪相关的措施。
监控: :chart_with_upwards_trend:
```

**配置**
```shell
# 增 / 删 / 改 / 弃用配置
配置: :wrench:
```

**依赖**
```shell
# 移除依赖
依赖: :heavy_minus_sign:

# 新增依赖
依赖: :heavy_plus_sign:

# 升级依赖
依赖: :arrow_up:

# 降级依赖
依赖: :arrow_down:
```

**工程**
```shell
# 增 / 删 / 改 / 弃用工作流（自动化管道、构建指令）
工作流: :railway_track:

# 对格式、标点符号、命名等的修改。
格式: :art:

# 增 / 删 / 改 / 弃用检查工具。
检查: :rotating_light:

# 发布一个版本。
发版: :bookmark:

# 部署相关的操作。
部署: :rocket:

# 增 / 删 / 改 / 弃用持续集成系统
持续集成: :green_heart:

# 混合分支。
分支: :twisted_rightwards_arrows:
```

**贡献者**
```shell
# 增 / 删 / 改 / 弃用贡献者。
贡献者: :construction_worker:
```

## 可补充使用的 Emoji

- :tada: `:tada:` 初始化提交。

- :ok_hand: `:ok_hand:` 根据复审结果更新代码。

- :whale: `:whale:` Docker 相关的操作。

- :wheel_of_dharma: `:wheel_of_dharma:` Kubernetes 相关的操作。
