---
layout:     post
title:      "What is async"
date:       2026-02-19 12:00:00 +0100
categories: programming, hardware
---

The key feature of asynchronous runtimes like that of Node.js is that they utilize so called non-blocking OS APIs
for IO (Input/Output). That is, system calls (services provided by the operating system kernel) that handle input and output
for you in a non-blocking way. Non-blocking here means they don't stop the execution flow in the calling application for the duration of the 
I/O operation, instead they let the calling code continue right after starting the operation and will get back or "call back"
to the caller later when it is finished. Before you start worrying, no, it doesn't mean it will just randomly interrupt the calling program,
instead the caller has to provide a piece of code (usually in the form of a function, the "callback"!) that the asynchronous
I/O operation can call when it is finished, and yes, this requires a kind of control loop (the event loop) in which
your program is "embedded" that is continuously looking for new I/O data becoming available and calling the provided callbacks with that data.

But what is "IO"? <!--more--> It roughly means accessing data from the disk (SSD these days) or the network or talking to peripherals.
IO is something that is performed "outside" of the CPU. It is performed by different circuitry for reasons
I only think I understand so I wont go into those. The CPU's internals are incredibly fast compared to the latencies of such
outside circuitry. It has very different performance characteristics, so it makes sense to talk about operations
the CPU can perform within itself (and btw operations that involve memory access, that is also not considered IO even
though accessing memory is much much slower than doing things "inside" the CPU but still much faster than the circuitry
involved in IO) and operations it can't. The operatins it can't perform within itself are referred to as IO (in my current understanding).

In the traditional "blocking" or "synchronous" way, doing IO means requesting/sending data from/to the CPU and then having it wait ("block") until 
the requested IO operation is finished. During that time the CPU is basically idle, but only for this given process - that's also an important note.
The OS is free to switch to some other currently waiting process - this is the task of the scheduler - and execute some of the instructions
associated with that othe process' thread(s).
This is a very intricate play of scheduling on multiple levels: threads, below them processes and I didn't even mention the
famous "event loop" that runs in a single thread of the Node.js runtime which is also a form of scheduling.

With asynchronous IO your program can just request some IO operation, then
the CPU can continue executing code in the current program that doesn't depend on the IO operation that
was just started. This is typically the case with server side web applications that handle many independent requests.
Code serving one request doesn't depend on the IO operation that was issued in the previous request.
In the traditional synchronous model, the CPU would waste lots of its precious time waiting for IO unncessarily
so synchronous IO is usually paired with multiple threads or processes to allow for concurrent execution.
Async IO tries to minimize the time the CPU spends waiting and at the same time avoid the overhead of scheduling multiple threads (or processes which are even "heavier").
There are other types of performance costs and complexity involved in managing the asyncronous routines inside the kernel,
but my knowledge ends here at the moment, I might dig deeper into the topic later.

Web servers based on blocking IO utilize multiple threads (hundreds, maybe thousands?)
and possible even multiple processes (like php's process pool) to handle concurrent web requests.
There are tradeoffs: switching between threads and especially processes are costly operations in terms of CPU time,
but they can be beneficial for certain types of workloads.

It is worth pointing out that there is nothing Node.js-specific in the concept of asynchronous IO. Node.js is just one of
the most well known languages where the the standard library is based on the asynchronous IO paradigm.
Many other languages have asynchronous IO libraries and they utilize the same underlying mechanisms.
The key technology that underpins asynchronous IO is a set of system calls:
epoll, kqueue, IOCP (linux, MacOS, Windows respectively) and a low-level library that wraps them: libuv, but
that is a much deeper topic.

The Node.js runtime is "single threaded". This is a vague term and needs context: the typical Node.js server side
application runs in a single thread, which means every web request is executed on a single thread.
There is nothing to schedule for other hardware threads so only one logical CPU core is utilized without
extra worker threads. This also means that logic requiring a lot of "pure CPU" time (image & video processing or heavy math for example)
without IO operations will "block" (ironically) the execution of other web requests unless
they are explicitly executed in a different thread.