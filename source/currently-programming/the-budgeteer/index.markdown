---
alias:
- /the-budgeteer/111/index.html
- /2007/05/21/the-budgeteer/index.html
comments: true
date: 2007-05-21 09:46:59
layout: page
published: false
slug: the-budgeteer
title: The Budgeteer
wordpress_id: 111
---

Changed the name to Budse. Now just go check it out on [![Get Budse at SourceForge.net. Fast, secure and Free Open Source software downloads](http://sflogo.sourceforge.net/sflogo.php?group_id=251382&type=16)](http://sourceforge.net/projects/budse)

Notes from previous page are on the next page (but I don't know why you would want them).

This is a basic budgeting program that keeps track of "sub-accounts" that you allocate a percentage of your income to.

So you can deposit and withdraw from each sub-account with no bearing on the other sub-accounts. The program has files that it stores information about for each transaction logged (in a custom format). Another feature that I very much like is being able to deposit into the whole account and the program will split it among the sub-accounts according to percentages that I specify. So every couple of weeks on payday, I will input the amount for my paycheck, the budgeteeer will prompt me to find out if I want to subtract before depositing (i.e. taxes), and then it will prompt me for where to deposit the amount to. If I choose the whole account (which I always do for paychecks), then it will deposit the appropriate amount into each sub-account. And from there I have a running total of all of my sub-accounts. This is useful for things like keeping track of a tithe or free spending money.

Anyways, I basically wrote this last summer (while interviewing for jobs) to



	
  1. Learn Python

	
  2. Not be bored

	
  3. Have a useful application for budgeting


It works decently as-is I think. I’ve been using it since I wrote it. It took me about a week or so working on it a couple of hours a day. That seems like a lot of work. Anyways it’s basically a GUI for some fairly simple mathematics.

Anyways I actually recently picked this program back up because every time that I upgrade my system, the Python settings will be changed. I thought about it also, and I think that this program can be done much better. It’s too hard-coded as is. In any case I am looking to make it more standardized (XML for saving data perhaps?), more object-oriented, and more customizable (number and names of sub-accounts). Stay tuned.

I'm looking to get it into a workable state where I could offer it to be downloaded. As it is right now, it's too specific to me and my machine. That is both poor in terms of programming as well as well as poor in terms of usability for other people. So I want to remedy that!

[2007-04-30]
Figured out that I can use winfo_screenwidth() (and winfo_screenheight()) in order to get the screen's width and height in measurements that I can use to calculate the size of buttons.

I played around with using a placement mechanism that consisted of a grid, but I found that it did not allow me enough flexibility in creating the buttons that I wanted.

[2007-08-13]
I started to think about this a bit recently again. It is still in a usable state but is not useful in distribution. Somethings that have crossed my mind are:

	
  1. Use SQLite for the backend instead of the customized file format currently being used.
Benefits:

	
    1. Python modules already exist for its use

	
    2. New fairly well-known technology to learn and use

	
    3. MUCH cleaner data access in code using Python module functions versus hard-coded parsing

	
    4. Allow easier installation (deprecates current folder structure).




	
  2. Need to create a logon (and logoff?) ability so that there does not need to be command line arguments. This will allow for easier portability and use.

	
  3. Need to really nail down the customization of amount and names of sub-accounts. The GUI part of this step is in a much better state already.

	
  4. Thinking that it might be a good idea to split up whole account deposits into either percentage OR static values. This is how other applications work and it could be easy to do. Goes along the lines of the envelope budgeting method.


Should definitely look into some of these (especially SQLite since that will open up the application's horizon of possibility).

[2008-12-16]
So starting around the end of June 2008, I started a complete rewrite of this program.

After spending so much time getting mired in the junk and hassle of recreating a windowing system, I wanted to refocus. So in my rewrite, my aim was for a svelte core that could have any arbitrary GUI attached to it.

Some of the quick and dirty changes are:

	
  * SQLite for persistent storage

	
  * Refined core

	
  * No GUI (at this time it's a command line program)

	
  * All settings can be changed


I'm currently in the application process to get my project hosted on SourceForge, but it has to be a takeover because someone had previously started a project under the same name. Hopefully I'll be able to get it and start distributing what I have. While it's fairly workable (I'm currently using it now for my own finances), it's still a little bit raw in some places. So I'm continuing to work on it.
