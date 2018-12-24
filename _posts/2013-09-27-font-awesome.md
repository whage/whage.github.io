---
layout: post
title:  "Font awesome version update notifications"
date:   2013-09-27 22:00:00 +0100
categories: update
tags: font awesome php microscript
---

Some sites I built use the [Font Awesome][font-awesome-icons] icon set.
The source is pulled from the [Bootstrap][bootstrap] [CDN][cdn] and whenever they updated it,
something kept breaking because my sites used the last version.
There are probably better solutions, this was a really quick idea and a quick implementation.
The following php script paired with a [cronjob][cronjob-php]
checks the current version number on the Font Awesome page and in case I'm using an older version, it sends me an email to take action.

{% highlight php %}
$currently_used_version = '3.2.1';

// get HTML of font awesome 'getting started' page
$web_page = file_get_contents('http://fortawesome.github.io/Font-Awesome/get-started/');

// find the link in the page
$pattern = '/font\-awesome\/(.*)\/css\/font\-awesome\.css/';
preg_match($pattern, $web_page, $cdn_link_matches, PREG_OFFSET_CAPTURE);

// if there is a new version
if ($cdn_link_matches[1][0] !== $currently_used_version) {
    // send notification using the simple built in mail function
    mail('mymail@mail.com', 'Font Awesome version changed!', 'Check your sites that use the old version!');
}
{% endhighlight %}

[font-awesome-icons]: http://fortawesome.github.io/Font-Awesome/icons/
[bootstrap]:   http://www.bootstrapcdn.com/
[cdn]: http://www.sitepoint.com/7-reasons-not-to-use-a-cdn/
[cronjob-php]: http://net.tutsplus.com/tutorials/php/managing-cron-jobs-with-php-2/
