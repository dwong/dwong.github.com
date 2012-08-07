---
alias:
- /736/public-restrooms-are-scary/index.html
- /2009/11/05/public-restrooms-are-scary/index.html
comments: true
date: 2009-11-05 12:16:24
layout: post
slug: public-restrooms-are-scary
title: Public Restrooms Are Scary
wordpress_id: 736
categories:
- Nerd
tags:
- Amusing
- Geek
- life in code
- Personal
- Python
- Useful
---


    <span style="color: green; font-style: italic"># use_public_toilet.py
    #
    # Algorithm for using a public toilet.  Success will vary based on the
    # toilet/situation (obviously).  However, this seems to be a generally safe
    # way to approach using a toilet.
    #
    # Handles both male and female needs as well as exceptional cases such as
    # no available toilet, getting dirty, and entering the wrong gender's
    # bathroom.
    #
    # Algorithm is roughly:
    # 1) Enter bathroom
    # 2) Find suitable toilet
    # 3) Protect yourself if it's a stall toilet that you sit on
    # 4) Do your business
    # 5) Finish up
    
    </span><span style="color: blue; font-weight: bold">import </span>common_sense
    
    <span style="color: green; font-style: italic"># Sometimes even nature's calling cannot overrule common sense
    # Including when you walk into the wrong bathroom
    </span><span style="color: blue; font-weight: bold">if </span><span style="font-weight: bold">(</span>bathroom<span style="font-weight: bold">.</span>is_disgusting <span style="color: blue; font-weight: bold">or </span>bathroom<span style="font-weight: bold">.</span>is_dangerous
        <span style="color: blue; font-weight: bold">or </span>bathroom<span style="font-weight: bold">.</span>gender <span style="font-weight: bold">!= </span>you<span style="font-weight: bold">.</span>gender<span style="font-weight: bold">):
        </span>you<span style="font-weight: bold">.</span>hold<span style="font-weight: bold">(</span><span style="color: red">'your waste'</span><span style="font-weight: bold">)
        </span><span style="color: blue; font-weight: bold">return </span><span style="color: green; font-style: italic"># (i.e., get out of there!)
    
    
    </span>my_toilet <span style="font-weight: bold">= </span><span style="color: blue">None
    </span><span style="color: green; font-style: italic"># Only male urinaters get to use the urinals, at least in the common case
    # (Abnormal cases are unhandled here)
    </span><span style="color: blue; font-weight: bold">if </span>you<span style="font-weight: bold">.</span>need<span style="font-weight: bold">() == </span><span style="color: red">'urinate' </span><span style="color: blue; font-weight: bold">and </span>you<span style="font-weight: bold">.</span>gender <span style="font-weight: bold">== </span><span style="color: red">'male'</span><span style="font-weight: bold">:
        </span><span style="color: blue; font-weight: bold">for </span>urinal <span style="color: blue; font-weight: bold">in </span>bathroom<span style="font-weight: bold">.</span>urinals<span style="font-weight: bold">:
            </span><span style="color: blue; font-weight: bold">if not </span>urinal<span style="font-weight: bold">.</span>empty<span style="font-weight: bold">:
                </span><span style="color: blue; font-weight: bold">continue
            </span>my_toilet <span style="font-weight: bold">= </span>urinal
    
    
    <span style="color: green; font-style: italic"># If you are not a male urinating or there is no urinal available
    </span><span style="color: blue; font-weight: bold">if </span>my_toilet <span style="color: blue; font-weight: bold">is </span><span style="color: blue">None</span><span style="font-weight: bold">:
        </span><span style="color: green; font-style: italic"># Time to look for the stall
        </span><span style="color: blue; font-weight: bold">for </span>stall <span style="color: blue; font-weight: bold">in </span>bathroom<span style="font-weight: bold">.</span>stalls<span style="font-weight: bold">:
            </span><span style="color: green; font-style: italic"># Use an empty toilet that can also be initialized to a clean state
            </span><span style="color: blue; font-weight: bold">if not </span>stall<span style="font-weight: bold">.</span>empty <span style="color: blue; font-weight: bold">or </span><span style="font-weight: bold">(</span><span style="color: blue; font-weight: bold">not </span>toilet<span style="font-weight: bold">.</span>clean <span style="color: blue; font-weight: bold">and not </span>toilet<span style="font-weight: bold">.</span>works<span style="font-weight: bold">):
                </span><span style="color: blue; font-weight: bold">continue
            </span>you<span style="font-weight: bold">.</span>enter<span style="font-weight: bold">(</span><span style="color: red">'Stall %s' </span><span style="font-weight: bold">% </span>stall<span style="font-weight: bold">)
            </span>my_toilet <span style="font-weight: bold">= </span>stall
            <span style="color: blue; font-weight: bold">break
        else</span><span style="font-weight: bold">:
            </span><span style="color: green; font-style: italic"># You could not find a suitable stall to use
            </span><span style="color: blue; font-weight: bold">return
    
        </span>you<span style="font-weight: bold">.</span>wipe<span style="font-weight: bold">(</span><span style="color: red">'toilet seat'</span><span style="font-weight: bold">)
        </span>you<span style="font-weight: bold">.</span>put<span style="font-weight: bold">(</span><span style="color: red">'toilet seat cover'</span><span style="font-weight: bold">)
        </span><span style="color: blue; font-weight: bold">while not </span>toilet<span style="font-weight: bold">.</span>seat_covered<span style="font-weight: bold">():
            </span>you<span style="font-weight: bold">.</span>put<span style="font-weight: bold">(</span><span style="color: red">'toilet paper'</span><span style="font-weight: bold">)
    
    
    </span><span style="color: green; font-style: italic"># Finally the time has come to get down to business
    </span><span style="color: blue; font-weight: bold">try</span><span style="font-weight: bold">:
        </span>you<span style="font-weight: bold">.</span>sit<span style="font-weight: bold">()
        </span>you<span style="font-weight: bold">.</span>do_your_business<span style="font-weight: bold">()
    </span><span style="color: blue; font-weight: bold">except </span>TouchDirtyException<span style="font-weight: bold">:   </span><span style="color: green; font-style: italic"># Don't touch the toilet!
        </span>you<span style="font-weight: bold">.</span>cry<span style="font-weight: bold">()
        
    
    </span>you<span style="font-weight: bold">.</span>flush<span style="font-weight: bold">(</span>my_toilet<span style="font-weight: bold">)
    </span>you<span style="font-weight: bold">.</span>wash_hands<span style="font-weight: bold">()
    </span>you<span style="font-weight: bold">.</span>leave<span style="font-weight: bold">()
    </span><span style="color: blue; font-weight: bold">if </span>you<span style="font-weight: bold">.</span>satisfied<span style="font-weight: bold">:             </span><span style="color: green; font-style: italic"># Be happy, you're done
        </span>you<span style="font-weight: bold">.</span>smile<span style="font-weight: bold">()
    
    </span>
    



