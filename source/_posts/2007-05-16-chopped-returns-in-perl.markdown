---
alias:
- /102/chopped-returns-in-perl/index.html
- /2007/05/16/chopped-returns-in-perl/index.html
comments: true
date: 2007-05-16 09:45:43
layout: post
slug: chopped-returns-in-perl
title: Chopped Returns (In Perl)
wordpress_id: 102
categories:
- Nerd
tags:
- Bug-fix
- Geek
- Learn
- Linux
- Mac
- Programming
- Useful
- Windows
- Work
---

Files on computers are made up of different characters that are interpreted by whatever it is that you are using.  That means that no matter what file it is, it is essentially a string of bytes that are interpreted by the program opening it.  This means that your music program tries to interpret whatever file you open with it to be conformed to some audio standards (mp3, wma, etc.).  Try to open the same file in a text editor, and you'll find yourself looking at (apparently) junk characters.  But then you'll realize that the file is still just a bunch of characters.

I bring this up because




  1. It seems as if people don't realize this.


  2. I encountered this while writing a Perl script today.



Something else that you should read even if you don't know what Perl is: Windows and Unix-variants (including Mac OS X and up) do not handle files the same.  I'm not talking about [Fanaticism](http://www.goingthewongway.com/2007/01/28/fanaticism/) (because I've already posted about that).  Windows uses characters that are referred to as the [Carriage Return](http://en.wikipedia.org/wiki/Carriage_return) and [Line Feed](http://en.wikipedia.org/wiki/Line_feed) in order to represent a newline.  These names originate because of their original use in the typewriter which actually had a physical mechanism to move.  In any case, Unix-variants utilize the line feed character to distinguish its newlines.  This can obviously lead to some problems if you use the same files on both systems.

**If you don't know what Perl is then you can fairly safely stop reading this article now because the rest won't help you much.**  I know that it was hard for me to find and I'd like to make it available if anyone else so happens to run into the same problem.

While writing a script in Perl today, I had a seemingly strange problem where I would do some processing on my Windows machine and then transfer the file via FTP to a Unix-based server.  However I noticed that I had a string that when printed to the screen on my Windows computer would display correctly but would display incorrectly in the file put onto the server.  I could not figure this out for quite sometime because it seemed as if some of the lines were printing correctly and some were not.  Alright enough explanation.  Essentially I thought that the last character was getting chopped off in some way that I did not understand in Perl.  However it had to do with Perl assuming that the lines has both a carriage return and a line feed on the lines and then chopping them off when the file was being sent via FTP.  The fix that I ended up using was simply a one line regular expression like so (a suggestion from a co-worker):

`$output=`some action`;
$output=~ s/n/rn/g;
print $output;
print FOUT $output;`

Hope that this helps someone searching for an answer.  I know that I would have liked to have happened upon the answer while searching for it.
