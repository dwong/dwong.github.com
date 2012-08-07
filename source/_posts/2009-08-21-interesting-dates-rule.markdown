---
alias:
- /interesting-dates-rule/629/index.html
- /2009/08/21/interesting-dates-rule/index.html
comments: true
date: 2009-08-21 00:19:45
layout: post
slug: interesting-dates-rule
title: Interesting Dates Rule
wordpress_id: 629
categories:
- Life
tags:
- Christianity
- Life
- life in code
- Seen-Around
---

#### Marriage_Dating.py



    
    
    too_long <span style="font-weight: bold">= </span><span style="color: red">730 </span><span style="color: green; font-style: italic"># days, which is 2 years
    
    </span><span style="color: blue; font-weight: bold">while </span>you<span style="font-weight: bold">.</span>engaged <span style="font-weight: bold">== </span><span style="color: blue; font-weight: bold">False</span><span style="font-weight: bold">:</span>
        <span style="color: green; font-style: italic"># What state are you in?
        </span><span style="color: blue; font-weight: bold">if </span>you<span style="font-weight: bold">.</span>dating <span style="font-weight: bold">== </span><span style="color: blue; font-weight: bold">False</span><span style="font-weight: bold">:
            </span>days_dating <span style="font-weight: bold">= </span><span style="color: red">0
            </span><span style="color: blue; font-weight: bold">if </span>you<span style="font-weight: bold">.</span>find<span style="font-weight: bold">(</span><span style="color: red">'PERSON'</span><span style="font-weight: bold">)
                </span>you<span style="font-weight: bold">.</span>dating <span style="font-weight: bold">= </span><span style="color: blue; font-weight: bold">True
                </span>other_person <span style="font-weight: bold">= </span>person_of_opposite_sex<span style="font-weight: bold">()
        </span><span style="color: blue; font-weight: bold">else</span><span style="font-weight: bold">:
            </span>days_dating <span style="font-weight: bold">+= </span><span style="color: red">1
    
        </span><span style="color: green; font-style: italic"># Date day, hooray!
        </span><span style="color: blue; font-weight: bold">if </span>you<span style="font-weight: bold">.</span>have<span style="font-weight: bold">(</span><span style="color: red">'DATE'</span><span style="font-weight: bold">):
    
            </span><span style="color: green; font-style: italic"># Here's the juice
            </span><span style="color: blue; font-weight: bold">if </span>dating<span style="font-weight: bold">.</span>purpose <span style="font-weight: bold">== </span><span style="color: red">'MARRIAGE'</span><span style="font-weight: bold">:
                </span>result <span style="font-weight: bold">= </span>you<span style="font-weight: bold">.</span>go<span style="font-weight: bold">(</span><span style="color: red">'DATE'</span><span style="font-weight: bold">, </span><span style="color: red">'INTERESTING'</span><span style="font-weight: bold">, </span>other_person<span style="font-weight: bold">)
                </span><span style="color: blue; font-weight: bold">if </span>days_dating <span style="font-weight: bold">>= </span>too_long<span style="font-weight: bold">:
                    </span>you<span style="font-weight: bold">.</span>dating <span style="font-weight: bold">= </span><span style="color: blue; font-weight: bold">False
            else</span><span style="font-weight: bold">:
                </span>result <span style="font-weight: bold">= </span>you<span style="font-weight: bold">.</span>go<span style="font-weight: bold">(</span><span style="color: red">'DATE'</span><span style="font-weight: bold">, </span><span style="color: red">'BORING'</span><span style="font-weight: bold">, </span>other_person<span style="font-weight: bold">)
    
            </span><span style="color: green; font-style: italic"># Process the result of the date
            </span><span style="color: blue; font-weight: bold">if </span>result <span style="font-weight: bold">== </span><span style="color: red">'WELL'</span><span style="font-weight: bold">:
                </span>pass<span style="color: green; font-style: italic"> # Just keep on going on those dates!</span><span style="color: blue; font-weight: bold">
            elif </span>result <span style="font-weight: bold">== </span><span style="color: red">'ENGAGED'</span><span style="font-weight: bold">:
                </span>you<span style="font-weight: bold">.</span>engaged <span style="font-weight: bold">= </span><span style="color: blue; font-weight: bold">True
            else</span><span style="font-weight: bold">:
                </span>you<span style="font-weight: bold">.</span>dating <span style="font-weight: bold">= </span><span style="color: blue; font-weight: bold">False
    
        </span><span style="color: green; font-style: italic"># Every other day of your (obviously) interesting life
        </span><span style="color: blue; font-weight: bold">else</span><span style="font-weight: bold">:
            </span>you<span style="font-weight: bold">.</span>go<span style="font-weight: bold">(</span><span style="color: red">'WORK'</span><span style="font-weight: bold">)
            </span>you<span style="font-weight: bold">.</span>go<span style="font-weight: bold">(</span><span style="color: red">'HOME'</span><span style="font-weight: bold">)
    
    
    </span>you<span style="font-weight: bold">.</span>go<span style="font-weight: bold">(</span><span style="color: red">'WEDDING'</span><span style="font-weight: bold">)
    </span>other_person<span style="font-weight: bold">.</span>go<span style="font-weight: bold">(</span><span style="color: red">'WEDDING'</span><span style="font-weight: bold">)
    </span>you<span style="font-weight: bold">.</span>married <span style="font-weight: bold">= </span><span style="color: blue; font-weight: bold">True
    
    </span>other_person<span style="font-weight: bold">.</span>married <span style="font-weight: bold">= </span><span style="color: blue; font-weight: bold">True
    </span>you<span style="font-weight: bold">.</span>celebrate<span style="font-weight: bold">()
    </span>other_person<span style="font-weight: bold">.</span>celebrate<span style="font-weight: bold">()
    </span>
    






#### README



Here's some help for understanding this snippet of Python programming code.  While you are unmarried, you are either dating someone or you are not.  If you're not dating and happen to find someone that you want to date, then lucky you!  The next categorization is you are either actively pursuing marriage or you are not.  If you are, I think that you should want to go on interesting dates.

Life isn't dinner and a movie.  Life is crazy and uncertain.  It's hard and difficult.  Don't you want to see how the person that you might spend the rest of your life with reacts?  When they're fording a river, do they get angry and upset with you?  When you're lost in the wilderness, do they get upset and frustrated?  When you get frustrated with them, do they snap back?  Find the worst in the person.  Look for it as hard as you possibly can.  Because if you can handle the worst, then you can definitely handle the best.

If you aren't as actively pursuing marriage then enjoy your dinner and movie.

And if you're not dating then good luck with being on your own and all of the issues entailed in CT's [The Case For Early Marriage](http://www.christianitytoday.com/ct/2009/august/16.22.html).

