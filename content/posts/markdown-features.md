---
title: "Markdown Features You Get For Free"
date: 2026-06-20
description: "Headings, lists, code blocks, tables, blockquotes — all built in."
tags: ["markdown", "hugo"]
---

Hugo uses [Goldmark](https://github.com/yuin/goldmark) to render Markdown.
Here's a tour of what you can write.

## Text styling

You can write **bold**, _italic_, ~~strikethrough~~, and `inline code`. Links
look like [this](https://gohugo.io/).

## Lists

Unordered:

- Apples
- Oranges
  - Mandarin
  - Blood orange
- Pears

Ordered:

1. Install Hugo
2. Run `hugo new site`
3. Write Markdown

## Code blocks with syntax highlighting

```go
package main

import "fmt"

func main() {
    fmt.Println("Hello, Hugo!")
}
```

```js
const greet = (name) => `Hello, ${name}!`;
console.log(greet("world"));
```

## Tables

| Generator | Language | Speed  |
| --------- | -------- | ------ |
| Hugo      | Go       | Fast   |
| Jekyll    | Ruby     | Slow   |
| Eleventy  | JS       | Medium |

## Blockquotes

> Hugo is one of the most popular open-source static site generators.
>
> — gohugo.io

## Images

You can place images in `static/` (e.g., `static/img/photo.jpg`) and reference
them as `/img/photo.jpg`.

![placeholder](https://via.placeholder.com/600x200)
