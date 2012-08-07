---
alias:
- /62/i-want-to-share-this/index.html
- /2007/04/08/i-want-to-share-this/index.html
comments: true
date: 2007-04-08 18:37:06
layout: post
slug: i-want-to-share-this
title: I Want To 'Share This'!
wordpress_id: 62
categories:
- Blog
- Nerd
tags:
- Blog
- Bug-fix
- Social-Bookmarking
- Useful
- Wordpress
---

If you use Wordpress, I recommend the very nice [Gregarious](http://dev.lipidity.com/feature/wp-plugin-gregarious) plugin for social bookmarking.  It has an excellent interface and the Share This button works very well.  But I was having a bug with it because the popup wouldn't display.

Most of my readers won't care one iota about this entire post.  But I don't post what they want to read, I post whatever I want to post!  And onward!

Basically I was experiencing the error where the Javascript popup would not show up for the Share This button, and I was actually getting redirected to another page. I saw that prototype.js needed to be added, but I was confused because I could see in the page source that it was being added. I also verified that wp_footer() was being called in my footer template, and I saw the akst Javascript code being appended at the bottom of the pages.

So after some debugging (I figured that it was something that I could find) I found that I wasn’t getting the popup because I had previously removed some of the social sites through the gregarious options (mainly because I wanted to limit the sites to those that I knew well). This caused the Javascript to result in an error (in my case: $(”akst_furl”) has no properties) because I had deleted furl from my list of social sites. This subsquently left the Javascript to error out which resulted in no popup window being displayed.

To verify what I suspected, I temporarily reset my social sites and saw that I was able to get the Javascript popup to show (because all of the Javascript properties were properly set).

Now I can obviously go into the akst.js and comment out those that I don’t want and then de-activate them from the gregarious options.

Fix: Add checks in the Javascript before processing so that anything changed in the gregarious options will not affect the Javascript. I looked at the option_value for greg_social_sites, and perhaps the best way is to read that string in, process it, and then overwrite the Javascript to be output into akst.js? But that’s just an idea.

I posted feedback to the author [here](http://dev.lipidity.com/feature/wp-plugin-gregarious#comment-4495).  I figured that I might as well post it also in case anyone is looking for it and happens to stumble upon my blog before the author's (which I see as highly unlikely).
