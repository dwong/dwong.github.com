---
layout: post
title: "Octopress For Static Blogging"
date: 2012-10-06 22:29
comments: true
categories: 
- Blog
tags:
- Blog
- Website
- Geek
---
Thank you, [Wordpress](http://wordpress.org).  You were fantastic to me for over 5 years, but I'm moving on to something new.  In efforts to keep things fresh, learn something new, and improve the performance of this blog, I am starting to blog with [Octopress](http://octopress.org), which is a blogging platform built on [Jekyll](http://jekyllrb.com/).

The advantages of this system include (but are not limited to):

*   It serves static web pages so it's _fast_.
*   [GitHub](https://github.com) offers built-in support so my blog is now in proper source control and hosted for free!
*   The completed website is generated on my machine and pushed to a webserver so I could easily move webhosts at any time.

There are plenty of write-ups about transitioning to a Jekyll-powered blog.  Namely I used [exitwp](https://github.com/thomasf/exitwp) to extract the posts. 

Octopress includes a pretty decent stylesheet, which made it easy to get up and writing.  However, I ended up customizing it that my blog would not look like all of the other Octopress-powered websites out there.  Some of the things that I added were:

*   [Sitemap](#sitemap)
*   [Atom Feed](#atom)
*   [Retaining sidebar collapsed state](#sidebar_state)

##<a id="sitemap"></a>Sitemap
Octopress included a sitemap plugin, but I didn't like that it used the file modification time.  In theory that works great, but for some reason it always showed every post with the exact same modification time.  So I just created my own:
```xml {% raw %}
<?xml version="1.0" encoding="UTF-8"?>
<?xml-stylesheet type="text/xsl" href="/sitemap.xsl"?>
<urlset xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd" xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>{{ site.url }}/</loc>
    <lastmod>{{ site.time | date_to_xmlschema }}</lastmod>
    <changefreq>daily</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>{{ site.url }}/favorite-posts/</loc>
    <lastmod>2012-02-07T20:59:36+00:00</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.6</priority>
  </url>
  <url>
    <loc>{{ site.url }}/about/</loc>
    <lastmod>2012-02-07T20:59:36+00:00</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.6</priority>
  </url>
  <url>
    <loc>{{ site.url }}/my-photo-gear/</loc>
    <lastmod>2012-09-07T20:59:36+00:00</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.6</priority>
  </url>
  {% for post in site.posts  %}
  <url>
    <loc>{{ site.url }}{{ post.url }}</loc>
    <lastmod>{{ post.date | date_to_xmlschema }}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.2</priority>
  </url>
  {% endfor %}
</urlset> {% raw %}
```

##<a id="atom"></a>Atom Feed
I started with [this simple Jekyll feed](http://vitobotta.com/how-to-migrate-from-wordpress-to-jekyll/#atom-rss-feed) in order to create a custom Atom Feed that looks like this:
```xml {% raw %}
<?xml version="1.0" encoding="utf-8"?>
<feed xmlns="http://www.w3.org/2005/Atom">

  <title><![CDATA[{{ site.title }}]]></title>
  <subtitle><![CDATA[{{ site.subtitle }}]]></subtitle>
  <link href="{{ site.url }}/atom.xml" rel="self"/>
  <link href="{{ site.url }}/"/>
  <updated>{{ site.time | date_to_xmlschema }}</updated>
  <id>{{ site.url }}/</id>
  <author>
    <name><![CDATA[{{ site.author | strip_html }}]]></name>
  </author>
  <rights>Copyright (c) 2007-2012 {{ site.author | strip_html}}</rights>
  {% for post in site.posts limit: 10 %}
  <entry>
    <title type="html"><![CDATA[{{ post.title | cdata_escape }}]]></title>
    <link href="{{ site.url }}{{ post.url }}"/>
    <updated>{{ post.date | date_to_xmlschema }}</updated>
    <id>{{ site.url }}{{ post.id }}</id>
    <content type="html"><![CDATA[{{ post.content | expand_urls: site.url | cdata_escape }}]]></content>
  </entry>
  {% endfor %}
</feed>
{% endraw %}
```
##<a id="sidebar_state"></a>Retaining Sidebar Collapsed State
The default template for Octopress includes a nifty sidebar that can be collapsed.  To improve that functionality, I included the [jQuery Cookie plugin](https://github.com/carhartl/jquery-cookie) and edited the addSidebarToggler function in octopress.js like so:
```javascript
function addSidebarToggler() {
  if(!$('body').hasClass('sidebar-footer')) {
    $('#content').append('<span class="toggle-sidebar"></span>');
    $('.toggle-sidebar').bind('click', function(e) {
      e.preventDefault();
      if ($('body').hasClass('collapse-sidebar')) {
        $('body').removeClass('collapse-sidebar');
        jQuery(window).trigger("resize");
        jQuery.cookie('sidebar_collapsed', "0", { expires: 7, path: '/', raw: true });
      } else {
        $('body').addClass('collapse-sidebar');
        jQuery(window).trigger("resize");
        jQuery.cookie('sidebar_collapsed', "1", { expires: 7, path: '/', raw: true });
      }
    });
  }
...
}
```
Additionally I added the following code:
```javascript
jQuery(document).ready(function () {
    var a = jQuery.cookie("sidebar_collapsed", {
        raw: true
    });
    if (a === "1") {
        $("body").addClass("collapse-sidebar");
    } else {
        $("body").removeClass("collapse-sidebar");
    }
});
```
