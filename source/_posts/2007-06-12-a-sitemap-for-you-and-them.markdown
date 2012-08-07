---
alias:
- /a-sitemap-for-you-and-them/134/index.html
- /2007/06/12/a-sitemap-for-you-and-them/index.html
comments: true
date: 2007-06-12 10:34:53
layout: post
slug: a-sitemap-for-you-and-them
title: A Sitemap For You (And Them)
wordpress_id: 134
categories:
- Blog
tags:
- Blog
- Geek
- Wordpress
---

I've made a [sitemap](http://www.goingthewongway.com/sitemap.xml) (which is, if the name doesn't already indicate, a map of this entire website).  It includes links to every page available on my site!  The purpose of this is to allow search engine 'bots (computers that "crawl" through the Internet so that pages can be found through their search engine) to be aware of all of my pages.  I'm using the [Google Sitemaps plugin](http://www.arnebrachhold.de/redir/sitemap-home/) which will automatically update the sitemap every time I update or create a post.  I'm also using the [Google Sitemap - append Tags plugin](http://www.dicontas.co.uk/blog/google-sitemap-utw-tag-wordpress-plugin/) in order to add the tag pages (where you can see all of the posts with that a tag) to the sitemap.

I think that it's cool, although I'm looking for a better way to order it.  It seems like it should be ordered based on the number of comments because that's what I set the option for.  

Hmm I just installed the [Popularity Contest plugin](http://alexking.org/blog/2005/07/27/popularity-contest-11/) to see if I could use that in order to calculate how to order the sitemap.  

And now I just easily set it to calculate the priority based on the Popularity Contest plugin!  It uses a priority that is calculated using view count, comments, pingbacks (links to), etc.  I also just realized that the sitemap is just ordered by having the most recently changed posts at the top.  I suppose that this makes some sense since it is for updating the index of the 'bot that is crawling it.  There is no sense in updating the index of a page that is unchanged.  

Okay so basically, now you can browse through and check out posts based on their priority.  I just recently made a [Favorite Posts](http://www.goingthewongway.com/favorite-posts/) page, but I'm not sure if I should still keep it.  Feedback, as usual, is welcome!
