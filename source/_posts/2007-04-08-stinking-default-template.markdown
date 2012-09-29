---
alias:
- /63/stinking-default-template/index.html
- /2007/04/08/stinking-default-template/index.html
comments: true
date: 2007-04-09 02:56:44
layout: post
slug: stinking-default-template
title: Stinking Default Template
wordpress_id: 63
categories:
- Blog
- Nerd
tags:
- Blog
- Bug-fix
- Useful
- Wordpress
---

Today (okay maybe last night) I wanted to finally fix a stupid error that I've had with my Wordpress installation.  Now I think that Wordpress has been pretty great, but there was something about it that was making me a little bit irritated.  Wordpress was working great when I first started, but then one day it seemingly reverted itself back to the Default theme as [Kiki](http://www.xanga.com/GoDsChiLd1427) so astutely pointed out [on this post](http://www.goingthewongway.com/2007/03/21/coffee-distaste/).  

Ever since I was simply temporarily fixing the problem by renaming the default theme to kubrick and actually making a copy of my real theme ([Not So Fresh](http://www.xsized.de/wordpress-theme-not-so-fresh/)) and naming it default.  Thus if wordpress ever decided to revert again, it would have no effect on what people saw.  

**This is obviously a dumb fix**.

So last night I looked harder for the source of the bug.  I happened upon [this page](http://wordpress.org/support/topic/80523#post-415311) and noted this:


> 
"The theme is reset to the default if the current theme appears broken with broken meaning that index.php or style.css are missing. If files are being deleted then replaced by some sync process, that could explain the theme reversion.

Ryan (Lead Dev)




This indicated to me that it might not necessarily be something wrong with my theme (since mine is a "modern" theme that seems to conform to many of the Wordpress standards).  I then realized that I had made a backup of my Wordpress installation some time ago and left it in the same publicly accessible directory.  (Aside: that is not a smart thing to do.  I should have put it into a private directory that nobody could access.)  Anyways, I suspect (thought I didn't look far enough) that what happened was that someone (likely a search bot) found my backup directory and accessed the contents.  This would in turn cause the Wordpress installation to not be able to find the proper index.php and/or style.css required pages.  And this would cause the Wordpress installation to mistakingly believe that there was an error in the theme (and it would thus revert itself back to the default theme with an update command to wp_options).

In short, I deleted the backup that I no longer needed anyways, and cleaned out all of the junk in the apache-served directory that was unnecessary.  If you are trying to solve your own similar problem, it will likely have to do with some files in your public-facing directory that reference Wordpress but are not actually in a proper Wordpress installation.  Clean up those index.php and style.css files!  

Anyways, so far the theme is holding fast, and I hope that it continues to do so because it's a pain in the butt looking through logs and forums posts to find out what's going on!  Also it'd be nice to have a very clean and bug-free installation so that I could move on to more interesting things like perhaps hosting someone else's blog in the future...
