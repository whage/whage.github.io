---
layout:     post
title:      "OAuth: statelessness and refresh tokens"
date:       2026-03-28 15:00:00 +0100
categories: software, auth, security
---

I spent some of the most torturous days of my career trying to set up Oauth and OIDC for Orthanc and OHIF
using keycloak. After 3 days I still can't figure out why I'm stuck in a redirect loop between
OHIF and Keycloak. I'm definitely getting closer however. The bright side is that I learned a lot (well,
the basics really) about OAuth, JWT and related concepts. I never really understood what people mean
by "stateless" services and what the difference between access tokens and refresh tokens were but I think
it finally clicked. And a few other things too.

<!--more-->

Pro tip before we start: never assume that technical terms are used correctly in the software (any?) industry.
In my past jobs people called many things stateless that weren't really. Always be sceptical.

Stateless really means what I thought: there is **no session information stored on the server**, instead
the client carries or "bears" (as in `Authorization: Bearer ...`, you know, like Frodo) a token
that doesn't contain any secret information but was cryptographically signed so that you can verify
its issuer. This token holds all relevant information ("state") for the user's session. Since it is signed,
you can trust it withoutcontacting the issuer every time granted you already know
the public key(s) of the issuer - that's what the `.well-known/openid-configuration` are for!
If the token contains all necessary information to create a response for the request then there is no
need for you to keep session information on the server. A new (and important) problem is introduced though: revocation
or "logout".

If you don't store session info on the server and the token is the only thing carrying information
then it means that until the token is valid, it gives the bearer access. Even if it gets stolen. You can't revoke it
because there is nothing stored on the server side about tokens and their validity.
Of course, you could do that for every token but that would be costly, especially if your servers
are distributed.

One potential half-solution are "refresh tokens". Refresh tokens are stateful because their validity is
stored at the server - an important distinction.
The normal access tokens expire fast (5-15 minutes maybe) so if they get stolen they quickly become useless.
Refresh tokens have a long lifespan: often weeks.
"Well I'll just use the stolen refresh token", I hear you laugh. But the refresh token is only accepted
for the (example) `/refresh` endpoint. You'd have to get a new access token to use the other endpoints.
You can do that for the relatively short time with your stolen access token but as soon as someone notices
they have a chance to lock you out by revoking it - marking it as "invalid" on the server.

This saves resources: You lose "pure" statelessness because you have to hit the database once every 5-15 minutes
(when the token expires). However, hitting the DB once every 15 minutes is much better for performance
than hitting it for every single API call (which could be a lot more).

"Instant logout", which is a hard requirement for many systems is still not possible with refresh tokens.
To log someone out immediately you have to make sure that as soon as the logout is done, the token becomes invalid immediately.
For that, you have to have session information on the server.

The statelessness of truly stateless access tokens have some no-downside use cases too, typically for one-off
things like email verification or password resets where the action the token allows is only performed once.