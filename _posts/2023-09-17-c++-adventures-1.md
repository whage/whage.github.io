---
layout:     post
title:      C++ adventures - part I.: First questions
date:       2023-09-17 23:30:00 +0100
categories: c++, programming, career
---
I interviewed for cloud devops positions at a few places this summer. I got one offer at the end of August.
Then I decided to decline and stay with my current employer in part because I was offered the same salary and because
my current job is very low-stress and very flexible. Both are very important while you have small children.
While still in negotiatiohn with my boss, during a meeting where we talked about the numbers he asked me this:

> "What is going to happen if give you what you are asking? How long until you start looking around again?"

That's a fair question. 
I knew there were other projects at our company (embedded, e-mobility) so I told him about my plans about getting into C/C++ and that I eventually want to move away from devops. If it is possible for me to switch within the company and they can help me with mentoring, then it's perfect, I won't be going anywhere soon.
I was told that right now there are no openings but soon there might be new positions.
It might be true, might be not, either way, now that I've talked about my plans, I feel like I can't put this off any longer, I have to start working on my C/C++. The past few evenings I spent some time looking into [Orthanc's source code (C++)][orthanc-source] because of some issues in our PACS project, so the stars seem to be aligned.
The ecosystem, the build tools, the libs, everything seems very complex, so here is a list of questions I need to get answered first.
It will be nice to look back at this list once I know the answers and it might also help keep my studying focused.

- assuming no IDE, how do I easily trace back a name (class or function or variable) to its definition? without explicit imports, it seems hard
- why are header files special? is it just a convention or do tools use them differently?
- in what form are c++ libraries distributed? source? .so files? why is a "header-only library" special?
- are there popular package managers and repositories?
- what is CMake and why do we need it? is Make not enough?
- how does the linker work? how do I control it?
- what are the most used compilers / build tools?

[orthanc-source]: https://hg.orthanc-server.com/
