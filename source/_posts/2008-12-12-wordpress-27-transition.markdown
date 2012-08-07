---
alias:
- /461/wordpress-27-transition/index.html
- /2008/12/12/wordpress-27-transition/index.html
comments: true
date: 2008-12-12 14:44:49
layout: post
slug: wordpress-27-transition
title: Wordpress 2.7 Transition
wordpress_id: 461
categories:
- Blog
tags:
- Blog
---

So I think that now I'm okay after upgrading my version of Wordpress (via [subversion](http://subversion.tigris.org/)) to 2.7.  Let me say that the new Dashboard (the part that the site owner looks at) is pretty darn nice now.  You can drag and drop things, and it has all kinds of AJAX goodness.

But I also had some difficulties while upgrading.  Namely, I had to fiddle a bit to get everything working alright.  I'd been using Brian's Threaded Comments, and the move from that to the new baked-in threaded comments wasn't too hard.  I just needed to update my theme, which is thankfully a custom one that I wrote so I know the ins and outs of it.  So I made a new comments page that looks fairly similar to what it looked like before.  The threading was maintained on old posts, and I definitely count it a success.

Then I realized today that my commenting isn't working!  While using Brian's Threaded Comments, I had been using a custom comment posting page to hinder spam.  However that meant that I wasn't using the normal page.  So when I switched to the normal page (wp-comment-post.php), it wasn't working!  I had to realize that the "Cannot modify header information - headers already sent by ..." error was because I had some extra lines in the aforementioned comment posting page.  Removed those, and all is well.

So if you tried to comment recently and that didn't work for you, I apologize.

But now that I think that I'm all good, I can enjoy how nice this new version is.  You won't be able to tell because it looks the same to you, but if you're thinking about blogging then consider [Wordpress.com](http://wordpress.com/) (if you don't have a server) and [Wordpress.org](http://wordpress.org/) (if you do have your own server).

If you have no idea what I'm talking about, then good day to you, and I hope that you're doing well.  Cheer up, at least gas is approaching $1.50 per gallon (it was $1.66 at Costco when I got it this morning).
