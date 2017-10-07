---
title: contribute
author: 疾风
date: '2017-10-06'
slug: contribute
categories: 
  - other
tags:
  - other
nocomment: true

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

以下是文件头的信息，请把这段内容复制到文章的最前面，并填写相关的信息。其中 categories 为栏目名称，tags 为文章的关键字，方便归档。如果有不清楚该怎么填的地方可以先留空。

```yaml
---
title: "文章的标题"
date: yyyy-mm-dd
author: "作者"
categories: ["分类1", "分类2"]
tags: ["标签1", "标签2"]
slug: article-base-name-in-english
---
```
- 本站不支持上传附件，故请将图传至图床(如微博，imgur等)，再以`![](https://i.imgur.com/sdQ8QKR.jpg)`的形式贴图。


