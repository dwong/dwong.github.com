---
layout: post
title: "Migrating To Jekyll"
date: 2015-12-17 23:20:28 -0700
comments: true
categories:
- Blog
---
I'm migrating this blog from [Octopress](http://octopress.org/) to vanilla [Jekyll](http://jekyllrb.com/).  I had initially enjoyed Octopress because it seemed to get me up and running in a short amount of time.  It also included a pretty nice default theme along with some tools to use.  However, the project seems to have been on a bit of a hiatus, and I think that it would be better in the long term if I just start to use Jekyll itself.  While I lose some of the included tools in the Octopress rake tasks, I can probably re-write some of them myself now that I'm more comfortable with Jekyll.

I did the following items while migrating, which maybe someone will find useful.

### Syntax highlighting
[Rouge](http://rouge.jneen.net/) is now the default syntax highlighter with Jekyll 3.0.  After converting to the [Liquid](http://liquidmarkup.org/) tags and running jekyll serve, I got the following error:

    Liquid Exception: undefined method `t' for nil:NilClass in /Users/blah/blah/YYYY-MM-DD-some-post.markdown/#excerpt

Turns out that I couldn't have syntax highlighting for the whole post.  I didn't dive too deep into it, but my simple fix was to add a first paragraph to the post so that there would be an excerpt available.

### Theme
I used the [Lanyon](https://github.com/poole/lanyon) theme.  At the time that I did it, I had to manually apply [this pull request](https://github.com/poole/lanyon/pull/149) to get it working with Jekyll 3.0.
