---
alias:
- /97/no-nofollow/index.html
- /2007/05/10/no-nofollow/index.html
comments: true
date: 2007-05-10 08:15:26
layout: post
slug: no-nofollow
title: No Nofollow!
wordpress_id: 97
categories:
- Blog
- Nerd
tags:
- Blog
- Geek
- Learn
- Read-It
- Useful
- Wordpress
---

While reading [Rory's post on hamelife.com](http://hamelife.com/blogging-its-not-about-everyone-its-about-every-one/) (which I enjoyed because it was very interesting plus my blog got a mention!) I continued surfing and happened upon [this post about nofollow links](http://dmiracle.com/tools/the-single-most-profound-way-to-thank-your-commenters/).

I doubt that many of you would want to read [the wikipedia article](http://en.wikipedia.org/wiki/Nofollow) explaining what I'm talking about so I will briefly explain.  Search engines ([Google](http://www.google.com/) among them) have an algorithm that uses the amount of links to your website as a part of how to determine the important of your website (this is called your PageRank in the end).  This is, in part, what is used to determine how high you are when searches are done.  

However to combat people abusing the system, they started to allow you to add an attribute relationship in the links like 

<a 
href="http://www.goingthewongway.com/" rel="nofollow">goingthewongway<a>


This would then be disregarded in the algorithm to calculate your PageRank.  The bottom line is that any links that have that attribute are worth nothing for search engines.

Why is this important?

As a blogger, being read is what's important!  Search engines allow your site to be listed as "more relevant" which could allow more people to find your site and read your content.  I don't write on this blog to understand myself.  I write because I like to share my thoughts and get feedback from others.  So after reading the article and thinking about it myself, I realized that it definitely encourages more feedback if commenters can get something back.  The big popular sites like to do fancy giveaways, but I'm not a big popular site.  However, I realized that the least that I could do would be to give anyone who commented a backlink!  This helps them because it ever so minutely increases their importance in the eyes of the search engine.  And it would hopefully help commenters to have another incentive to leave their thoughts.  

Anyways suffice to say I installed the ever so easy to use [DoFollow](http://kimmo.suominen.com/sw/dofollow/) plugin for Wordpress which removes the nofollow attribute for all user-input links (like the website that you list when you leave a comment).  Happy nofollow commenting!
