# Recent changes

## 2020-02-19

- reworked theme

## 2019-03-18

- manually load comments

## 2018-09-28

- lazy load images

## 2018-08-15

- added [algolia search](https://www.algolia.com/doc/tutorials/), detailed ideas stole from [this blog post](https://blog.qikqiak.com/post/hugo-integrated-algolia-search/) (actually this is done in April)

- bump footer to 2018

- minor tweaks over lhdata






## 2017-11-07

- remove unecessary files from obsoleted themes

## 2017-11-04
- added [wordcloud2.js](https://github.com/timdream/wordcloud2.js/) under tags and bangumis
- added [particles.js](https://github.com/VincentGarreau/particles.js/) under home and subteams
- added [revolvermaps](https://www.revolvermaps.com/) under most main pages(home, taxonomy etc)
- [tags are cleaned up](https://github.com/tcgriffith/lhdata/tree/master/notebook)
- rework paginator navigator
- rework archive, now highlight posts updated within 7 days
- many minor tweaks of css




# owaraisite

The site for [owaraiclub](http://owaraiclub.com)

Powered by hugo, blogdown and netlify.

# How to preview locally (macOS, linux)

1. Install [hugo](https://github.com/gohugoio/hugo/releases) and git

2. Clone this repo to a local folder:

```
$ mkdir test_site
$ cd test_site
$ git clone --recursive https://github.com/tcgriffith/owaraisite/
```

3. Run hugo serve

```
$ cd owaraisite
$ hugo serve
```

Then you should see something similar to this:

```
Started building sites ...

...

Web Server is available at //localhost:1313/  (bind address 127.0.0.1)
Press Ctrl+C to stop

```

And you are good to go.

