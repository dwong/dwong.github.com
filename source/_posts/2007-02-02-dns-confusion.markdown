---
alias:
- /dns-confusion/12/index.html
- /2007/02/02/dns-confusion/index.html
comments: true
date: 2007-02-02 09:38:15
layout: post
slug: dns-confusion
title: DNS Confusion
wordpress_id: 12
categories:
- Blog
tags:
- Blog
- Bug-fix
- Geek
- Learn
- Wordpress
---

So last night I encountered a fairly common error.  For some reason (I still don't know why) the Internet connection at home was not working.  Now this meant that I would have to renew the IP address (and thereafter update the DNS to reflect this change).  I had done this at least once before so it was pretty straightforward.

HOWEVER, after changing the host record on [namecheap's](http://www.namecheap.com) site, the DNS would still not redirect me to the correct IP address (my own).  Bah, so I figured that there was a refresh problem and just went to sleep.  (I also turned off the server as I do every night in case you might be wondering why you can't get to it at night).  I woke up this morning and checked it out to see what was up.  Still no change.  How could this be?!  I tried updating it and checking it over and over.  I finally realized something was terribly wrong.  I thought that perhaps it had to do with submitting my site to google's index so I tried removing it.  I have since realized that probably has nothing to do with it.  Then I came to the conclusion that namecheap might not be as optimal as previously thought.  That's too bad.  But no love lost since it's not a big deal.  Thus I transferred the DNS services to [zoneedit](http://zoneedit.com/) which has an ugly site but has good reviews.  They took a little while (~30 min) to transfer the DNS as well as update the host record.  Pretty good.  We'll see how it holds up.


So in sum, we're back online!  :D
