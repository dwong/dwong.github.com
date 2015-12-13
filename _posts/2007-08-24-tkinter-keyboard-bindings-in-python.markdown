---
redirect_from:
- /195/tkinter-keyboard-bindings-in-python/index.html
- /2007/08/24/tkinter-keyboard-bindings-in-python/index.html
comments: true
date: 2007-08-24 18:00:36
layout: post
slug: tkinter-keyboard-bindings-in-python
title: Tkinter Keyboard Bindings (In Python)
wordpress_id: 195
categories:
- Nerd
tags:
- Programming
- Projects
---

So I found this table useful, and I thought that I'd make it available for easier searching for those who might also look for it.  It's useful when creating a GUI with Tkinter in Python.  I'm not really sure how much of that kind of development is going on, of course, but that's beside the point.

Anyways this is specific to the "special keys" that are used in the bind method for event handling, so I've not looked into where else this particular information could be useful.  I, for one, used this in order to bind the enter key on the keypad to the same functions as the normal enter button.  It was annoying me while using [The Budgeteer](http://www.goingthewongway.com/currently-programming/the-budgeteer/) because I couldn't figure out what the name of the button to bind was.  That has thankfully been remedied!

Example:
`root = Tk()
def hello(*ignore): 
    print 'Hello World'
root.bind('<return>', hello)
root.mainloop()
`



.keysym.keycode.keysym_numKey


Alt_L
64
65513
The left-hand alt key



Alt_R
113
65514
The right-hand alt key



BackSpace
22
65288
backspace



Cancel
110
65387
break



Caps_Lock
66
65549
CapsLock



Control_L
37
65507
The left-hand control key



Control_R
109
65508
The right-hand control key



Delete
107
65535
Delete



Down
104
65364
↓



End
103
65367
end



Escape
9
65307
esc



Execute
111
65378
SysReq



F1
67
65470
Function key F1



F2
68
65471
Function key F2



Fi
66+i
65469+i
Function key Fi



F12
96
65481
Function key F12



Home
97
65360
home



Insert
106
65379
insert



Left
100
65361
←



Linefeed
54
106
Linefeed (control-J)



KP_0
90
65438
0 on the keypad



KP_1
87
65436
1 on the keypad



KP_2
88
65433
2 on the keypad



KP_3
89
65435
3 on the keypad



KP_4
83
65430
4 on the keypad



KP_5
84
65437
5 on the keypad



KP_6
85
65432
6 on the keypad



KP_7
79
65429
7 on the keypad



KP_8
80
65431
8 on the keypad



KP_9
81
65434
9 on the keypad



KP_Add
86
65451
+ on the keypad



KP_Begin
84
65437
The center key (same key as 5) on the keypad



KP_Decimal
91
65439
Decimal (.) on the keypad



KP_Delete
91
65439
delete on the keypad



KP_Divide
112
65455
↓ on the keypad



KP_Down
88
65433
on the keypad



KP_End
87
65436
end on the keypad



KP_Enter
108
65421
enter on the keypad



KP_Home
79
65429
home on the keypad



KP_Insert
90
65438
insert on the keypad



KP_Left
83
65430
← on the keypad



KP_Multiply
63
65450
* on the keypad



KP_Next
89
65435
PageDown on the keypad



KP_Prior
81
65434
PageUp on the keypad



KP_Right
85
65432
→ on the keypad



KP_Subtract
82
65453
- on the keypad



KP_Up
80
65431
↑ on the keypad



Next
105
65366
PageDown



Num_Lock
77
65407
NumLock



Pause
110
65299
pause



Print
111
65377
PrintScrn



Prior
99
65365
PageUp



Return
36
652933
The enter key (control-M). The name Enter refers to a mouse-related event, not a keypress




Right
102
65363
→



Scroll_Lock
78
65300
ScrollLock



Shift_L
50
65505
The left-hand shift key



Shift_R
62
65506
The right-hand shift key



Tab
23
65289
The tab key



Up
98
65362
↑


