---
layout:     post
title:      Accidentally deleting a prod DB
date:       2023-12-10 23:00:00 +0100
categories: badOps, database
---

Yesterday I accidentally deleted a production database containing years of medical data for thousands of patients.
I'm still in shock of how this could have happened to me, I tend to think of myself as careful especially
around prod stuff. Previously I thought this was only possible if you are really careless and stupid. 
To be fair, it is. I was careless and stupid. This is how it happened.

<!--more-->

We recently got contracted to take over the maintenance of a legacy medical data management app
that is running at a major healthcare provider.
I was one of its developers from 2015 until 2018 but haven't seen or touched it for years now.
It was quite neglected in the past years, but still chugging along, doing its work.

We didn't get any version control repos, but got the current state of the source,
its configuration, a description of its current environment and a setup guide.
Crucially, there was no DB initialization script or document or anything.
I was trying to set up the application on my laptop and part of that was setting up the MariaDB database.
To get a refresher about the DB's structure I started looking at the prod DB using DBeaver
through a forwarded local port:

```
ssh <destination-host> -L 0.0.0.0:3306:172.18.0.2:3306
```

Can you spot my mistake? It looks innocent, doesn't it? No, in restrospect, this is so dumb and negligent.
This command forwards traffic from port 3306 of all local IPv4 interfaces to the prod DB host's same port.
This means that if I talk to port 3306 of my own machine, I'll really be talking to the prod DB host instead.
This is the default mysql port. If I run some test SQL script I have lying around or some snippet I got from the internet
thinking that I'm just messing around locally, while this port-forwarding is up in the background,
I'll actually be running everything against the prod DB.

The second stupid thing I did was using the same MariaDB credentials when setting up my local DB.
I just took the prod docker-compose.yml file unaltered and used it, the MariaDB credentials were set there as
environment variables for the DB container. I thought, "of course I'll change that later, just have it running already".
I didn't change it, so now it was possible to accidentally talk to the prod DB through localhost
AND authenticate using the same credentials. What could go wrong?

Now for the third thing. There was no DB schema description or DB initializer script anywhere in the docs or the source,
so I decided to get the schema from the prod DB without any data using this:

```
mysqldump -u <db-user> -h 127.0.0.1 -P 3306 <db-name> -p --no-data > /tmp/db-schema.sql
```

Fantastic, now I have my DB schema in a local SQL file, I can finally set up an empty DB.
I haven't worked with databases for a good while and the dump file was full of
comment-looking lines:

```
/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
... a few others ...
```

Figuring out why these are there and how they could work (running it directly from DBeaver resulted in errors)
occupied most of my attention that I allocated for understanding MariaDB just enough to have it running.
At the end I used the mysql cli to import the schema and it didn't complain about the above lines, they
turned out not to be very important for me now.
I didn't really pay attention to the rest of the SQL, but later I realized that every table creation
block in it started like this:

```
DROP TABLE IF EXISTS `users`;
CREATE TABLE `users` (
  ...
)
```

After the incident, I can't imagine how those `DROP TABLES` didn't poke my eyes out immediately, but they didn't.
This is the default way mysqldump creates the DDL for you.
So, it was time to set up my local db schema and I was happily issuing this command:

```
mysql -h 127.0.0.1 -P 3306 -u <db-user> -p <db-name> < /tmp/db-schema.sql
```

Then I type in the password.
The moment I pressed enter, I felt something could be wrong. Why was I using the prod password? Was I really connecting to port 3306? 
Didn't I see something like "DROP TABLE" in the SQL? Could I have left the port-forwarding open?
I immediately started pressing ctrl-C. Shut down the ssh connection, brought down the VPN connection. It was too late.
I Rushed to DBeaver to see the prod DB's tables.
Empty. The second one is empty. The third one is empty. All the others too.

_\*gulp\*_

I went to Slack and wrote to my colleages: "I did something bad. I dumped the prod DB. Do we have backups?"
I couldn't even say "I'm sorry" because it felt so useless and meaningless.
My phone rang within a minute, and my colleague asked me in a quavering voice: "Are you serious? Oh **** that's a huge problem."
The next 30 minutes were intense.
Eventually we got to the IT guys of the client. They told us they were doing full-VM-snapshots using Veeam
(a practice and a technology I know nothing about) every night and they retain those for 7 days. That meant
we could restore the server to a state it was last night. I could hardly believe that I might get away with this
but in the end I did. I was careless and stupid but got very lucky.

This is an important lesson for me about being very careful around production systems.
Also a lesson about the meaning of "safety first" - what if those nightly backups were not put in place by someone?
I can't even imagine the consequences.
It's also a lesson about our reliance on _other people_ and keeping calm when things go wrong. Everyone was reachable on a saturday
afternoon and besides the initial surprise and horror noone was angry at me - which would be absolutely normal.
Our sys admin who is normally not the friendliest guy on the planet (but has remarkable technical knowledge of computers down to the hardware),
was really calm and immediately started looking through the server to find traces of backups.
His initial reaction was "Oh, you did that? It's not the end of the world, I did this in the past as well".
When I said to my boss how sorry I was and how stupid I feel, he said "It's okay, obviously you didn't do it on purpose, I'm not angry."

This time (as I am usually for some unknown reason) I was very lucky that the guys who are running these systems
are much much more competent than I am and had good safety mechanisms in place.
This happened on a saturday afternoon so there is likely to be only minor data loss.
Data loss non the less, but probably the best scenario I could have hoped for.

I am still shocked and ashamed. I still cringe when I think about what could have happened if we don't have
those IT guys, those _other people_ who, as opposed to me, do their jobs right and whose cautiousness saved everyone.

So what could have I done better?

- do not, by all means forward a port from localhost to the same port of a prod system
- do not ever reuse credentials of a prod system locally, not even temporarily
- do look at what exactly you will be running
- disconnect from your prod system immediately when you have no more business there

So guys, be decent, be wary, know your systems and be prepared to handle a ****up like this on your systems.
Decent, cautious, well-prepared, skilled, competent people saved the day.
