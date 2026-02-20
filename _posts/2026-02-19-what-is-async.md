---
layout:     post
title:      "What is async"
date:       2026-02-19 12:00:00 +0100
categories: programming, hardware
---

The key feature of asynchronous runtimes like that of Node.js is that they utilize so called non-blocking OS APIs
for IO (Input/Output). That is, system calls (services provided by the operating system kernel) that handle input and output
for you in a non-blocking way, meaning they don't block you after you made your call, instead they return immediately
and provide the data later, when it becomes available.

What is "IO"? It roughly means accessing data from the disk (SSD these days) or the network or talking to peripherals.
IO is something that is performed "outside" of the CPU. It is performed by different circuitry for reasons
I only think I understand so I wont go into those. The CPU's internals are incredibly fast compared to the latencies of such
outside circuitry. It has very different performance characteristics, so it makes sense to talk about operations
the CPU can perform within itself (and btw operations that involve memory access, that is also not considered IO even
though accessing memory is much much slower than doing things "inside" the CPU but still much faster than the circuitry
involved in IO) and operations it can't. The operatins it can't perform within itself are referred to as IO (in my current understanding).

With asynchronous IO your program can just request some IO operation and then
the CPU can go on doing its business elsewhere. This, in theory, should result in high CPU utilization.
In the traditional synchronous model, the CPU would waste lots of its precious time waiting for IO unncessarily.
Async IO maximizes CPU use.

It is worth pointing out that there is nothing Node.js-specific in the concept of asynchronous I/O. Node.js is just one of
the most well known languages where the the standard library is based on the asynchronous I/O paradigm.
Many other languages have asynchronous I/O libraries and they utilize the same underlying mechanisms.
The key technology that underpins asynchronous I/O is a set of system calls:
epoll, kqueue, IOCP (linux, MacOS, Windows respectively) and a low-level library that wraps them: libuv, but
that is a much deeper topic.

The Node.js runtime is "single threaded". This is a vague term and needs context: the typical Node.js server side
application runs in a single thread, which means every web request is executed on a single thread.
There is nothing to schedule for other hardware threads so only one logical CPU core is utilized without
extra worker threads. This also means that logic requiring a lot of "pure CPU" time (image or video processing for example)
without I/O operations will "block" (ironically) the execution of other web requests unless
they are explicitly executed in a different thread.