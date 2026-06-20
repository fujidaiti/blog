---
title: "Things You Can Do With Hugo"
date: 2026-06-20T10:00:00
description: "A short tour of Hugo's most useful built-in features."
tags: ["hugo", "tips"]
---

Now that you've seen the basics, here are concepts worth knowing as you build
out your site.

## 1. Sections

Any folder under `content/` becomes a **section**. This blog has one called
`posts/`. To add another (e.g., `notes/`), just create `content/notes/` and drop
Markdown files in. Hugo auto-generates a list page at `/notes/`.

## 2. Front matter

The metadata at the top of each `.md` file. You can use it for taxonomies, draft
status, custom params — anything. In templates you read it via `.Params.foo` or
shortcuts like `.Title`, `.Date`, `.Tags`.

## 3. Taxonomies (tags, categories)

Hugo auto-builds tag pages from the `tags` field in front matter. Visit
`/tags/hugo/` to see every post tagged `hugo`. You can define custom taxonomies
(e.g., `series`, `authors`) in `hugo.toml`.

## 4. Layouts & lookup order

When rendering a page, Hugo searches for a template in a
[specific order](https://gohugo.io/templates/lookup-order/). The most common
files:

- `layouts/_default/baseof.html` — the HTML skeleton
- `layouts/_default/single.html` — single page (a post, an "about" page)
- `layouts/_default/list.html` — list page (e.g., `/posts/`)
- `layouts/index.html` — the homepage

You can override theme templates by creating files with the same path in the
project root.

## 5. Partials & shortcodes

- **Partials** are reusable template fragments
  (`{{ partial "header.html" . }}`).
- **Shortcodes** are reusable snippets you call from Markdown, e.g.
  `{{</* youtube id="abc" */>}}`.

## 6. Asset pipeline

For CSS/JS that needs bundling or minification, place files in `assets/` and use
Hugo Pipes:

```go-html-template
{{ $css := resources.Get "css/main.css" | resources.Minify | resources.Fingerprint }}
<link rel="stylesheet" href="{{ $css.RelPermalink }}">
```

This blog skips that and uses plain `static/css/style.css` for simplicity.

## 7. Useful commands

```bash
hugo server -D       # dev server, includes drafts, live reload
hugo new posts/x.md  # create new content from archetype
hugo                 # build the site into public/
hugo --minify        # build with HTML/CSS/JS minification
```

## 8. Deployment

`hugo` outputs a fully static `public/` directory. Deploy it anywhere: GitHub
Pages, Netlify, Cloudflare Pages, S3, or your own server.

That's the tour — happy blogging!
