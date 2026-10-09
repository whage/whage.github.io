---
layout:     post
title:      "The dangers of coding with agents"
date:       2026-10-04 11:00:00 +0100
categories: AI, agents
---

As I'm slowly gaining experience working with LLM coding agents I'm noticing
some patterns in my work that are problematic and if not kept in check will probably
become serious issues.

<!--more-->

- frequent pausing and switching context
	- between prompts, working on multiple topics
- scope and feature creep
	- the LLM is incredibly thorough and easily derails the work
		- subtle bugs it found that were unknown previously
		- related issues
		- edge cases that would almost never happen