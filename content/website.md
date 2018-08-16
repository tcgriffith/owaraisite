---
title: Owaraiclub 使用说明书
author: 疾风
date: '2017-10-01'
publishdate: '2017-10-01'
slug: owaraiclub_tutorial
description: "笑神本部使用说明书"
toc: true
index: false
---

# Owaraiclub 使用说明书

![](https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Baby_Pandas.JPG/800px-Baby_Pandas.JPG)




本教程演示网站owaraiclub的基本使用方法，包括如何在本地预览网站，如何编辑帖子，如何通过github合作进行网站管理更新等等。



## 基本简介

owaraiclub为基于hugo的[静态](http://blog.csdn.net/erlian1992/article/details/51868799)网站，即：所有可访问网页都为静态的html文件。

owaraiclub项目通过github管理，并由netlify抓取github上的owaraiclub项目，实时更新-编译-发布。

owaraiclub项目最初通过Rstudio 和 blogdown(内核为hugo，添加多种功能)进行搭建，不过基本功能其实只需要hugo，故而以下提供两种方案。

## markdown格式文章简介

所有文章位于/owaraisite/content/下, 为markdown格式的纯文本文件。

markdown基本语法见[另一篇博客](/blog/markdowndoc/) 或 [markdown cheat sheet](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)

文章内容分为两部分：

- 头部为yaml格式的文章信息区域，包含了文章基本信息，由 `---`或`+++`隔开

- 其余部分为markdown格式的正文

例如 /owaraisite/content/post/2017-09-01-170901-london-hearts.md, 内容如下

```
---
title: ' london hearts 外表选美大赛 170901'
author: 伦敦之心字幕组
date: '2017-09-30'
categories:
  - LH
  - 伦敦之心字幕组
tags:
  - 有吉弘行
  - 田村淳
  - 千鸟
slug: 170901-london-hearts-外表选美大赛
description: 一句话总结
---

![](https://wx1.sinaimg.cn/mw1024/a5ffaf9bgy1fj6jdugrbkj20xa0kudky.jpg)

# 简介

本期LH是外表选美大赛 男艺人 女艺人还有男大姐 担任评委的外国男士 将凭外表选出最漂亮的人

[BILIBILI链接](http://www.bilibili.com/video/av14132743/)

```


## 使用说明

### (推荐) 方案A  `Rstudio` 和`blogdown`包

Rstudio是基于R语言的集成开发环境(IDE)。其中，`blogdown` 包内置了包括hugo, git, 网站编辑器的功能，故而推荐。

#### 如何本地预览网站

1. 克隆网站文件夹至本地  (假设github账号已有，为`yourusename`)
    - 浏览器打开 `https://github.com/tcgriffith/owaraisite/`，
    - fork 该项目到你自己账号下
    - 克隆至本地^[](事实上直接克隆 `https://github.com/tcgriffith/owaraisite/`也可以，不过为方便后面多人合作部分，还是克隆一份自己的项目吧)
        - MAC & linux

            ```
            mkdir GIT
            cd GIT
            git clone --recursive https://github.com/yourusename/owaraisite/
            ```
        - Windows:
            假设本地网站地址为 `C:\GIT\owaraisite`
            - 安装 `Git GUI`
            - `Repository->Clone`，
            - `source location` 填入 `https://github.com/yourusename/owaraisite/`
            - 设置`target directory` 为 `C:\GIT\owaraisite`
            - 勾选 `Recursively clone submodules too`, 点击`Clone`

2. 设置Rstudio环境
    - 安装[Rstudio](https://www.rstudio.com/products/rstudio/download/)
    界面如下
    ![](https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Rstudio.png/1200px-Rstudio.png)
    - 在Rstudio中安装blogdown
        打开Rstudio, 在console里依次输入  如下命令

        ```
        install.packages("devtools")
        install.packages("rmarkdown")
        devtools::install_github('rstudio/blogdown')
        ```
    - 安装hugo

        ```
        blogdown::install_hugo()
        ```
    - 设置 git
    在`Tools->Global Options->GIT/SVN` 里设置GIT excutable位置 （例如 `C:/Program Files/Git/bin/git.exe`）
3. 本地预览网站
    - Rstudio中选择 `Addins->Serve Site`
    - 在右下模块的Viewer选项卡下预览网站

#### 如何编辑文章

- 使用Rstudio 发新帖较为容易，如下：
    - 单击 `Addins-New Posts` ,
    - 设置文章标题，作者，分类，标签文章信息，content下的子目录（如post,blog）

    ![](https://bookdown.org/yihui/blogdown/images/new-post.png)

    - 选择 `Addins->Serve Site`

    - 编写正文 浏览器预览网站中文章效果，满意后保存即可



#### 如何发布文章至网站

当你在本地编辑的文章已经完成，或是调整了模板css或html文件，如何把更新的内容更新到网站上呢？ 另外，你更新的内容，其他人应该如何同步这些修改？

以下为具体操作


- push 更新内容至github的你个人owaraisite项目下
    如图，在git选项卡下依次 commit push即可
    ![](https://i.imgur.com/emSM47h.png)

- 提交pull request至主网站项目
    - 进入 `https://github.com/yourusername/owaraisite`
    - 选择 `New pull request`
    - 选择 `compare across forks`, `base fork`为 tcgriffith/owaraisite `head fork` 为 yourusername/owaraisite
    - 点击绿色按钮 `Create pull request`即可提交更新申请

- 如何同步其他人更新的内容至你自己目录下
    可能一段时间之后别人更新了很多内容，这个时候pull一下即可

    ```
    git pull https://github.com/yourusername/owaraisite
    ```



### 方案B hugo

#### 如何本地预览网站
hugo轻便到只包含一个可执行文件

1. 克隆网站文件夹至本地，参见方案A

2. 安装Hugo  [hugo下载地址](https://github.com/gohugoio/hugo/releases)
   - MAC & linux
       a. 下载对应操作系统版本hugo
       b. 解压，将文件 hugo 拷贝至`/usr/local/bin/`下
   - Windows
       假设安装在`C:\Hugo\bin`
       a. 下载对应操作系统版本hugo
       b. 解压，拷贝hugo.exe 至C:\hugo\bin
       c. C:\hugo\bin添加至Windows的PATH变量下,在此仅收录win10设置方法
           - 点击 开始
           - 点击 系统
           - 点击左侧 高级系统设置
           - 点击底部 环境变量...
           - 在 用户变量区，找到Path项 双击
           - 点击新建， 输入`C:\hugo\bin`保存退出

3. 本地预览网站
    假设本地网站地址为 `C:\GIT\owaraisite`
    - 打开CMD
    - 进入网站目录

        ```
        cd C:\GIT\owaraisite
        ```
    - 输入如下命令

        ```
        hugo serve

        ```
    - 若显示如下内容即成功

        ```
        Built site for language en:
        0 draft content
        0 future content
        0 expired content
        12 regular pages created
        38 other pages created
        0 non-page files copied
        18 paginator pages created
        7 tags created
        7 categories created
        total in 42 ms
        Watching for changes in C:\GIT\owaraisite\{data,content,layouts,static,themes}
        Serving pages from memory
        Web Server is available at //localhost:8220/ (bind address 127.0.0.1)
        Press Ctrl+C to stop
        ```
    - 浏览器地址栏输入 `//localhost:8220/` 即可预览


#### 如何编辑文章
- hugo
    - 运行 hugo serve 预览网站
    - 使用任意文本编辑器，在/content/blog/或 /content/post/下新建 格式为 `2006-01-01-title.md`的文档
    - 按其他文章模板，手动设置文章信息
    - 编写正文 浏览器预览网站中文章效果，满意后保存即可




#### 如何发布文章至网站

当你在本地编辑的文章已经完成，或是调整了模板css或html文件，如何把更新的内容更新到网站上呢？ 另外，其他人更新的内容，应该如何同步这些修改？

以下为具体操作

- push 更新内容至github的你个人owaraisite项目下
    如图，在git选项卡下依次 commit push即可
    ![](https://i.imgur.com/emSM47h.png)

- 提交pull request至主网站项目
    - 进入 `https://github.com/yourusername/owaraisite`
    - 选择 `New pull request`
    - 选择 `compare across forks`, `base fork`为 tcgriffith/owaraisite `head fork` 为 yourusername/owaraisite
    - 点击绿色按钮 `Create pull request`即可提交更新申请

- 如何同步其他人更新的内容
    可能一段时间之后别人更新了很多内容，这个时候pull一下即可

    ```
    git pull https://github.com/yourusername/owaraisite
    ```


## 其他

### 发现文章内容有错怎么办（错字，错图）

- 2017-10-04
    点击文章右上角的“编辑本页” 即可链接至github源文件页，编辑之后提交pull request即可

### 如何进行评论管理

- 2017-10-04
    - TODO
    - 目前使用liveRe，可能需要重新注册一个帐号 ~~现在服务器挂了~~

# 扩展资料

- [github简易教程](http://kbroman.org/github_tutorial/)

- [hugo文档](http://gohugo.io/documentation/)

- [blogdown](https://bookdown.org/yihui/blogdown/)

- [xmag主题](https://themes.gohugo.io/hugo-xmag/)

- [netlify](https://www.netlify.com/)

- [markdown cheetsheet](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)








