---
layout:     post
title:      "tmux scrollback buffer copy-paste issue"
date:       2026-03-10 15:00:00 +0100
categories: programming, terminals
---

I just realised how to reproduce it and the likely cause.
It happens when I start scrolling back in the output history.
It only affects lines that have been "repainted" (right term?) by tmux when you scroll up.

I suppose it is because tmux adds a little panel at the top right corner showing some timestamp and the
line counter in the history:

```
16:10:29 [332/48377]
```

It has to fill in the space between that and the actual text on the screen and it never removes
those extra spaces so when I ctrl+shif+v (using the basic terminal app in Ubuntu) then
the spaces get copied too.

Trying to fix this would be a nice rabbit hole to learn about terminals.