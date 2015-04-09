---
redirect_from:
- /736/public-restrooms-are-scary/index.html
- /2009/11/05/public-restrooms-are-scary/index.html
comments: true
date: 2009-11-05 20:16:24
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

```python
# use_public_toilet.py
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
    
import common_sense
    
# Sometimes even nature's calling cannot overrule common sense
# Including when you walk into the wrong bathroom
if (bathroom.is_disgusting or bathroom.is_dangerous
    or bathroom.gender != you.gender):
    you.hold('your waste')
    return # (i.e., get out of there!)    

my_toilet = None
# Only male urinaters get to use the urinals, at least in the common case
# (Abnormal cases are unhandled here)
if you.need() == 'urinate' and you.gender == 'male':
    for urinal in bathroom.urinals:
        if not urinal.empty:
            continue
        my_toilet = urinal    

# If you are not a male urinating or there is no urinal available
if my_toilet is None:
    # Time to look for the stall
    for stall in bathroom.stalls:
        # Use an empty toilet that can also be initialized to a clean state
        if not stall.empty or (not toilet.clean and not toilet.works):
            continue
        you.enter('Stall %s' % stall)
        my_toilet = stall
        break
    else:
        # You could not find a suitable stall to use
        return

    you.wipe('toilet seat')
    you.put('toilet seat cover')
    while not toilet.seat_covered():
        you.put('toilet paper')

# Finally the time has come to get down to business
try:
    you.sit()
    you.do_your_business()
except TouchDirtyException:   # Don't touch the toilet!
    you.cry()
    

you.flush(my_toilet)
you.wash_hands()
you.leave()
if you.satisfied:             # Be happy, you're done
    you.smile()
```
