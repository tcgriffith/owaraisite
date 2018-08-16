---
title: contribute
author: HUMI
date: '2017-10-06'
slug: contribute
nocomment: true
index: false
---

# 投稿指南

这是一个超简单的教程，按照以下三步，就可以上传最简单的草稿，不需要命令行的操作和安装额外软件，只需一个github账号即可。

1. [创建文件](#create)
1. [添加、更新文章的内容](#update)
1. [提交文章](#pr)


## <span id="create">第一步 创建文件</span>
- 作品类(post)，请点击这个链接：<https://github.com/tcgriffith/owaraisite/new/master/content/post/>；

- 文章类(blog)，请点击这个链接：<https://github.com/tcgriffith/owaraisite/new/master/content/blog/>；

界面如下

<img src="/img/contribute/1.png" style="width: 600px;">

点击绿色的大框：`Fork this repository and propose changes`

##  <span id="update">第二步 添加、更新文章的内容</span>

- 完成第一步后进入如下图界面：

<img src="/img/contribute/2.png" style="width: 600px;">

分别在标题，正文框内填入内容即可，标题和正文格式要求请见 [附注](#notes)


## <span id="pr">第三步 提交文章内容</span>

- 点击页面底部的`propose new file`,
    <img src="/img/contribute/3.png" style="width: 600px;">
- 新页面里点击`create pull request`
    <img src="/img/contribute/4.png" style="width: 600px;">
- 当出现如下界面时即为投稿成功,点击图示netlify右侧的`detail` 即可预览刚刚投稿的文章的实际效果
    <img src="/img/contribute/5.png" style="width: 600px;">


# <span id="notes">附注</span>

- 文件名请以`2000-01-01_title.md`方式命名，文件名包含日期与英文简写，方便归档。

- 文件头：
头文件为YAML格式(YAML Ain't Markup Language)。不过在这里，只需要知道头文件里的以下两种语法

1:1对应的属性设置：
```
属性: 属性值
```
或 1:N的属性设置：
```
列表:
  - 列表值1
  - 列表值2

# 或者还可以这样写：

列表: ["列表值1"，"列表值2"]
```


以下是文件头的信息，请把这段内容复制到文章的最前面，并填写相关的信息。

```yaml
---
title: 161111 london hearts 红不起来的艺人父母想法
author: 伦敦之心字幕组
bangumi: 伦敦之心
date: 2017-10-15
publishdate: 2016-11-11
slug: 2017-10-15_9611864_161111_NA
categories:
  - 伦敦之心字幕组
  - 九條
tags:
  - AKB48
  - 伦敦之心字幕组
bangumis: #
  - 伦敦之心
description: 161111 london hearts红不起来的艺人父母想法
weight: 38889
nocomment: false
---
```

以下介绍支持头文件设置的功能

- 基本信息
单篇文章的基本属性，包括标题，作者，番组，

```
title: 161111 london hearts 红不起来的艺人父母想法
author: 伦敦之心字幕组
bangumi: 伦敦之心
date: 2017-10-15
publishdate: 2016-11-11
slug: 2017-10-15_9611864_161111_NA
bangumi: 伦敦之心
```

- 类别信息
目前支持以下类别信息，每一种类别均有对应的类别页。比如[bangumis](/bangumis/)
注意类别信息必须使用列表形式，即使只有一项
- categories 分类 包括字幕组+UP主，目前隐藏
- tags 标签 抓取自Bilibili
- bangumis 番组 为节目名



```
categories:
  - 伦敦之心字幕组
  - 九條
tags:
  - AKB48
  - 伦敦之心字幕组
bangumis:
  - 伦敦之心
```

- 页面设置信息

**draft**: `草稿` 默认为false，设为true可让帖子不显示
**ocomment**: `关闭评论` 设为true可关闭帖子的评论
**noprofile**: `关闭作者信息`
**noedit**: `关闭编辑图标`
**nodate**: `隐藏发帖时间`


默认为false(打开作者信息)，设为true可关闭页面底部的作者信息







