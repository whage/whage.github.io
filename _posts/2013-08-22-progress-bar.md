---
layout: post
title:  "Negative text progress bar"
date:   2013-08-22 22:00:00 +0100
categories: rontend
tags: css javascript
---

A good friend of mine, the founder of [Boomla][boomla], a "website OS" as he calls it suggested I improve my progress bar design by making its text change color pixel by pixel as the progress bar passes through.

<!--more-->

The idea is to have two identical divs on top of each other with different text and background color and slowly extending the top one over the other. I have not yet seen such a progress bar anywhere on the internet,
it might even start a revolution! :O

<link rel="stylesheet" href="/static/progress-bar.css">

<div class="centering-wrapper">
    <div class="progress-container">
        <!-- the span element is needed to fill the padding (without it, that padding would be filled with background color) -->
        <div class="progress-bar positive"><span></span>Uploading: wc3l_replay_pack.zip</div>
        <div class="progress-bar negative"></div>
    </div>
</div>

<script src="/static/progress-bar.js"></script>

[boomla]: https://boomla.com/
