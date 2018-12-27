---
layout: post
title:  "Writing crawlers"
date:   2013-05-20 22:00:00 +0100
categories: update
tags: php web crawler curl
---

I'm currently reading the book called 'Webbots, spiders and screen scrapers - a guide to developing internet agents with PHP' by Michael Schrenk and I really enjoy it partly because it is something new to me and partly because the author seems to pay attention to many small details. I have certainly seen cleaner code than in the book but it makes good points and shows simple yet useful examples.

<!--more-->

Here is something interesting I learned today, that I'm not sure I would have learned otherwise:

> "The last aspect of verifying that you're using correct URLs is ensuring that your referer values correctly simulate followed links. You should set the referer to the last target page you requested. This is important for several reasons. For example, some image servers use the referer value to verify that a request for an image is preceded by a request for the entire web page. This defeats bandwidth hijacking, the practice of sourcing images from other people's domains. In addition, websites may defeat deep linking, or linking to a website's inner pages, by examining the referer to verify that people followed a prescribed succession of links to get to a specific point within a website."

There is one thing I don't quite understand yet. The book is based on PHP/cURL.

Now cURL seems to be very useful and much more capable for data transfer than the built in PHP functions (according to quite a few stackoverflow threads and the PHP manual too) but the structure of the PHP cURL implementation (is that phrase even correct?) in my oppinion **begs for an Object Oriented design**. Yet I only found [one OO PHP cURL library][oop-curl-lib] on github.

What do others use? Own libraries? Or they just accept cURL in PHP as it is? Do they even use cURL?
I guess cURL was around way earlier than PHP became OO but even if it is so, someone could have been bothered to make the PHP cURL extension officially object oriented.

[oop-curl-lib]: https://github.com/jsocol/oocurl
