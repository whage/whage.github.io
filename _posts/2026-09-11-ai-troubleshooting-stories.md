---
layout:     post
title:      "AI troubleshooting stories"
date:       2026-09-11 16:00:00 +0100
categories: AI, troubleshooting
---

Claude has helped me solve some issues that I'm quite sure I wouldn't have been able to tackle
alone, I'll summarize them here. I'll try to make this into a separate page on the blog.

<!--more-->

# 2026-09-10: a buggy javascript build and a race condition
The v3.12.xx line of vesions of the OHIF image viewer have a very frustrating type of bug
in them. I couldn't reproduce it on my dev machine neither in Chrome or Firefox, neither
on my Android phone's browser. It showed up consistently (after an inital load followed by
a page refresh) for 2 teammates who used Windows and then when I tried in a Windows VM
I could also reproduce it.

The bug was about a javascript build tool applying an incorrect optimization (assuming
some global JS variable is always available, namely `__filename`, which isn't inside the browser)
as well as a race condition that depended on the order of .js and .css files being loaded
(`document.currentScript` getting set or not).

Claude not only found it, it understood how to trigger the error and wrote a small python
script that brought up a server with an artificial delay on that .css file thus reproducing
the race. After just a few minutes claude had 2 instances of that dummy server running,
one constantly missing the bug, the other constantly reproducing it.
I could have never, ever figured this out on my own.
