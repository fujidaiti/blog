---
title: "Hello, World"
date: 2026-06-19
description: "First post — a quick intro to how Hugo organizes content."
tags: ["hugo", "getting-started"]
---

Welcome to my first post on this Hugo blog! This post exists at
`content/posts/hello-world.md` and is served at `/posts/hello-world/`.

## How Hugo turns this into a page

1. Hugo reads the **front matter** (the YAML block at the top) for metadata:
   title, date, tags, etc.
2. It renders the Markdown body to HTML.
3. It picks a **layout** from the active theme — for a post, that's
   `themes/simple/layouts/_default/single.html`.
4. The HTML is written to `public/posts/hello-world/index.html` when you run
   `hugo`.

## Creating a new post

From the project root:

```bash
hugo new posts/my-new-post.md
```

This uses `archetypes/default.md` as a template and sets `draft = true`. Run the
dev server to preview drafts:

```bash
hugo server -D
```

{{< midi project="smile-meditation" sheet="4-ibdw" height="360" >}}
