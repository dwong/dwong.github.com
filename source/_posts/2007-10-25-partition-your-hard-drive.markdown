---
alias:
- /partition-your-hard-drive/218/index.html
- /2007/10/25/partition-your-hard-drive/index.html
comments: true
date: 2007-10-25 11:20:56
layout: post
slug: partition-your-hard-drive
title: Partition Your Hard Drive
wordpress_id: 218
categories:
- Nerd
tags:
- Geek
- Learn
- Software
---

Hard drives consist of many bits, configured in a particular way (of which the explanation is far far beyond the scope of this blog post).  But needless to say we like to view the hard drive as a block of space that we can store things in.  The hard drives each have partitions setup on them, the most common case being a single partition for the operating system and all of the data.

However this is not exactly what a lot of people want.  Sometimes they want different partitions because they want different operating systems on the same computer, but more often it's just because they want some kind of division between their data and their operating system, applications, etc.  For more reasons, check out [the purpose of partitioning](http://en.wikipedia.org/wiki/Partition_(computing)#Purpose) according to wikipedia.

When you install an operating system for the first time, it has a partitioning tool that allows you to choose how you want to partition your new hard drive.  Well often if you buy your computer retail then they've already set it up for you.  But _if_ you were to actually go through the entire process yourself, then you'd likely partition the hard drive with the operating system installer's tool.

But then, what if your hard drive is currently set up differently than you want?  What do you do once your data is all over your drive?  Well you have a couple of choices.  You can either completely format (and erase) your hard drive and start from scratch.  This is obviously not going to be your first choice if you have data on your hard drive already as that would involve backing up and restoring all of your data.  That seems like a rather long process unless you're having serious errors and really do want to start from scratch (which is sometimes the desired outcome).  So the other option is to use some software to re-partition your hard drive while maintaining your data.



#### Norton PartitionMagic Replacement


Many people know about Norton PartitionMagic in order to do exactly this task.  But after eschewing that (in my mind) expensive software, I would highly encourage everyone to check out the free and open source [Parted Magic](http://partedmagic.com/).  That is what I used!  It's a LiveCD (which means that you download it, burn it on a cd, insert it into your computer, and boot off the CD.  It utilizes the [Gparted](http://gparted.sourceforge.net/index.php) application for the partitioning duties.

It was a snap to use when I recently upgrade my [Ubuntu](http://www.ubuntu.com/) installation from Feisty Fawn (7.04) to Gutsy Gibbon (7.10) (don't you love the alliterative names, I know that I do).

In order to use just:




  1. Defrag your hard drive


  2. Download [the .iso image](http://dw.com.com/redir?edId=3&siteId=4&oId=3000-2094_4-10716910&ontId=2094_4&spi=acdc544bd173f09f9d8c0426e5c554e7&lop=link&tag=tdw_dltext&ltype=dl_dlnow&pid=10716910&mfgId=6292732&merId=6292732&destUrl=http%3A%2F%2Fwww.download.com%2F3001-2094_4-10716910.html%3Fspi%3Dacdc544bd173f09f9d8c0426e5c554e7)


  3. Burn to a CD as a disk image


  4. Insert into computer


  5. Boot to the CD (you might need to change a BIOS setting or two in order to do this)


  6. Create, resize, modify your partitions and keep your data intact!


