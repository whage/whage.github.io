---
layout: post
title:  "Which way forward?"
date:   2018-12-29 10:00:00 +0100
categories: personal
tags: career
---

I have an idealistic image of the perfect work environment for software developers.
One where the work is not limited to high levels of abstraction. Where people get a chance to rethink and experiment
and build stuff from scratch.
One where every day work touches on many different areas of computer systems.
The problems are technical in nature and there is ["real engineering"][whither] involved.
The performance and efficiency of the resulting software is at the core.
One where the members of the teams are experts who can and do make [sound decisions grounded in theory and experience][nasa],
who have a deep understanding of the different layers of software all the way to the hardware and who can do optimizations
where it is most efficient.
Where the quality (correctness) of the software is assured by using advanced tools and technologies.

<!--more-->

I still don't have a clear idea about which direction I want to be heading within the software world.
After becoming disillusioned with web development, I went through a major career change in 2018 and ended up
working in a field and environment that is much closer to my interests.
I'm working with interesting and popular technologies that are on the rise, however I still don't feel like I spend my
everyday work with stuff that really excites me.
What bothers me is that so far, I couldn't define what it is exactly that I want to change
or in which direction I should start moving.

In this post I try to gather my thoughts, maybe I'll be wiser once I see everything written down in one place.

# What are the most important factors?
Technological freedom: the developers should not be constrained to a limited set of technologies.
The acquired knowledge ought to be transferable to other areas.
Work should to be challenging and interesting.
People should have the chance to learn and experiment with new things.
No unreasonable deadlines and pressure.
People should work in a highly skilled team of like-minded people who share the same motivations and values.
The mission ought to be something worthwhile. One should work on problems he/she feels are truly important.

# What I didn't like about generic web app / business software
The repetitive nature of the work: CRUD functionality for yet another entity in the system.
The lack of technical challenge: the emphasis is on modelling business processes which are usually just simple sequences of actions.
Speed of development is preferred instead of the efficiency of the resulting software.
To achieve speedy development we just keep building layers and layers of half-baked generic solutions on top of each other
and we [bloat our software][handmade] making it even slower and more complex.
UI development is also unavoidable where you have to satisfy subjective requirements with many iterations and manual labor.
I didn't find anything related to "engineering" in this kind of work.
Strict, model-based planning or the use of solid models / mathematics were absent.

# What I don't like about doing cloud-based infrastructure
We work at very high levels of abstractions and the knowledge we gain is not very generic or transferable.
These abstractions are those of well known low level technologies but at the IaaS provider level, they get fancy new names
and their functionality gets limited in ways the vendor saw fit. The knowledge you gain ties you to the vendor.
Strangely, I often feel like the ["essential complexity"][tar-pit] of our tasks are typically low
but at the cloud provider resource level it becomes a never ending trial and error of tweaking configuration parameters.
In programming we solve a problem by designing how data will flow through the system. We define every aspect of it. There is a lot of freedom.
In a "cloud infra engineer" role, we don't do algorithms, instead we draw boxes, connect them, tweak their parameters and see what happens.
But be careful! Box "A" can oly be connected to box "B" if box "C"'s foo parameter is set to "x". Why? Because the docs say so!
It feels like there is usually one way to achieve something and it is by finding that one combination of resource parameters.
We are using [leaky abstractions][leaky-abstractions]. We are very limited in our work.
It's not all that bad of course. I get to learn about how cloud-based software work, which is increasingly more valuable knowledge
and also learn a lot about networking and operations. I just miss writing programs.

Now I'll look at the areas of software that I haven't worked in yet and find really interesting.

# Security / ethical hacking / penetration testing
The emphasis is on finding unknown weaknesses in systems. You get to break them and they pay you for it!
Requires a deep knowledge of the lowest layers of computer systems which are very interesting.
Continuous learning is a key aspect of the work. There is a constant race against the opposite side.
Securing digital information is increasingly important as everything around us is getting digitized.
Good security professionals will probably be in great demand. It also feels like black magic.

# Systems programming and low-level languages
The work is done on a very low level of abstractions: you get a lot of freedom with regards
to implementation (and slow and cumbersome development as well).
The feeling that you get to build the very fundamentals and you have full control over the machine's resources.
The emphasis is on performance: one must know the underlying hardware well.
You work closely with the operating system: very broad and interesting area.

# Simulations, scientific computing, HPC
The problem space stems from natural science research: a chance to help advance natural sciences.
You get to work with huge, powerful machines. (Do you?)

# Parallel / distributed computing
As CPU frequency scaling is slowing down, the world is moving towards multiprocessing systems.
The software of the future will need to run efficiently on parallel hardware.

# Programming languages and compiler technology
Creating a programming language is like creating a little world.
Compilers are one of the fundamental enabling technologies of all software development.
The domain is full of interesting algorithms and data structures.
There are interesting new ideas and paradigms all the time.

# Why am I attracted so much to self-driving car technology?
It's an interesting combination of many exciting areas of information technology:
- low level software
- image processing: full of interesting math
- AI, machine learning
- networks
- hardware and electronics
- distributed systems
- cars!

It is so closely related to the real world and it can have a huge impact.
The problem domain (teach a machine how to navigate the world around us) seems very complex and challenging.

# Why does game development seem so interesting?
It spans many different areas of software development:
- low-level, close to the hardware: efficiency is key
- network programming
- AI
- graphics, rendering, GPU programming
- physics modelling
- procedural generation
- custom developer tools

You create your own worlds with rules that you define. You get to build everything from scratch.
The result is something very tangible.
Developing games is a great way of self-expression.

# Conclusion
It seems there are some common traits of the areas I'm most interested in:
- usage of low-level languages that provide a lot of control over the hardware
- emphasis on concurrency and parallelism
- a deep understanding of the OS is necessary

I'll try to focus more on C, C++, assembly, GO, operating systems and network programming.
I'm curious where I'll be in a few years and what I'll be thinking of this essay then.

[leaky-abstractions]: https://www.joelonsoftware.com/2002/11/11/the-law-of-leaky-abstractions/
[nasa]: https://mystudentvoices.com/a-look-into-nasas-coding-philosophy-b747957c7f8a
[whither]: https://pdfs.semanticscholar.org/3a6b/0506b8b922d7e6cc933a39dc165b5f34797e.pdf
[handmade]: https://handmade.network/manifesto
[tar-pit]: https://blog.acolyer.org/2015/03/20/out-of-the-tar-pit/
