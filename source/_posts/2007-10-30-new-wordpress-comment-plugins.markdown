---
redirect_from:
- /220/new-wordpress-comment-plugins/index.html
- /2007/10/30/new-wordpress-comment-plugins/index.html
comments: true
date: 2007-10-30 19:34:16
layout: post
slug: new-wordpress-comment-plugins
title: New Wordpress Comment Plugins
wordpress_id: 220
categories:
- Blog
tags:
- Blog
- Wordpress
---

I like commenting on blogs, and I also very much enjoy receiving comments.  So I added some new plugins that I thought would facilitate that process.

The plugins that I have added and am now using on this blog are:




  1. [Brian's Threaded Comments](http://meidell.dk/archives/2006/12/19/brians-threaded-comments-159/) which allows for comments to be in threads rather than just as a single list.  This is nice because it can get confusing in the way that I used to just use an "@ user" type of response.  The only drawback is that I'll probably have to limit the number of levels that nesting will occur because it will make the comments unreadable as they get more and more narrow.  

This code looks stupid and ugly on my current theme, but I'm going to change it very soon so I'm still going to post it.  Most people don't care about this, but I figured that I'd put it out there if anyone did find it useful and didn't know too much PHP.

So is here is the change so that there will be no "Reply to this comment" link if the comments for a post are already closed:

`<div class='reply'><?php global $user_ID; global $post; if ( get_option("comment_registration") && !$user_ID ) 
  echo '<a href="'.get_option('siteurl') .                                                                                                                                                  
  '/wp-login.php?redirect_to=' . get_permalink() .                                                                                                                         
  '">Log in to Reply'; 
elseif ('open' == $post->comment_status) {?>                                      
  <a href='#' onclick='moveAddCommentBelow("div-comment-<?php echo $c->comment_ID ?>", < ?php echo
  $c->comment_ID ?>, true); return false;'>Reply to this comment</a>       
< ?php } ?>                                                                                                                                                              
</div>`

I also added code from my original comments.php in my theme file so that if a user is logged in, it will not ask them for their information (name, e-mail, etc).  Although I don't think that there are too many people with accounts on my blog (go for it, it's not so bad) I figured that it was at least a solution that I enjoyed more for my own sake.  However the code change was too much for this so I'm not going to post it in this entry.
Other than that it's pretty super!  I like the look, and I hope that others will appreciate it.  And most of all I hope that it fosters more discussion!


  2. [Comment Timeout](http://www.jamesmckay.net/code/comment-timeout/) lets me fight another problem on my blog.  And that problem is spam comments.  Hateful, despicable spam comments.  They take at least a little bit of time to go through sometimes when people's comments get caught in moderation.  So I've decided that since it rather makes sense to close the comments on old posts, I will.  It's not as if people particularly post comments on my old posts anyways.

Additionally it has the ability to keep the comments active if the post is deemed "active."  The plugin is fairly full-featured with some customizable options such as the timeout period, etc.  Not a bad plugin if I do say so myself.  It was a better option for me than the very basic Close Old Posts plugin written by Matt Mullenweg and listed on the wordress.org site.



Let me know what you think of the new plugins!  Does it make you want to leave more comments?
