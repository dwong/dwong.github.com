---
layout: post
title: "Shopping Is Fun, Really!"
date: 2013-06-11 21:02
comments: true
categories: 
- Life
tags:
- life in code
---
```python
def shop_fast(user, items_to_buy):
    shopping_cart_items = []
    for item in items_to_buy:
        item.find()
        if user.wants(item):
            shopping_cart_items.append(item)
    for item in shopping_cart_items:
        user.buy(item)

def shop_slow(user, items_to_buy):
    shopping_cart_items = []
    for item in items_in_store:
        if item in items_to_buy:
            print('Awesome!')
        if user.wants(item):
            shopping_cart_items.append(item)
    for item in shopping_cart_items:
        user.buy(item)

if gender is 'Male':
    shop_fast()
else:
    shop_slow()
```
