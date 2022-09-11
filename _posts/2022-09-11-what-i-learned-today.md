---
layout:     post
title:      What I learned today
date:       2022-09-11 15:30:00 +0100
categories: learning
---

1. Learned about network configuration in libvirt. Default mode is NAT. Can also be isolated or routed. Each fits a different
scenario.
2. Linux uses "disk caching" (== "page cache") to speed things up and it shows this in a newbie-confusing way when using htop or free for example.
See [Linux ate my ram][linux-ate]. Check "Available" instead of "Free".
Linux memory management is complex. See `/proc/meminfo`.

> Linux performs all file I/O through the page cache. Writes are implemented as simply marking as dirty the
> corresponding pages in the page cache; the flusher threads then periodically write back to disk any dirty pages.
> Reads are implemented by returning the data from the page cache; if the data is not yet in the cache, it is first populated.
> [difference between Buffers and Cached][buff-vs-cached]

Questions

Difference between `virbr0` and `virbr0-nic`. Why one has an IP address configured by default and the other doesn't?
```
4: virbr0: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc noqueue state UP group default qlen 1000
    link/ether 52:54:00:0c:6f:e5 brd ff:ff:ff:ff:ff:ff
    inet 192.168.122.1/24 brd 192.168.122.255 scope global virbr0
       valid_lft forever preferred_lft forever
5: virbr0-nic: <BROADCAST,MULTICAST> mtu 1500 qdisc fq_codel master virbr0 state DOWN group default qlen 1000
    link/ether 52:54:00:0c:6f:e5 brd ff:ff:ff:ff:ff:ff
```

[linux-ate]: https://www.linuxatemyram.com/
[buff-vs-cached]: https://qr.ae/pvOegP