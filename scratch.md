Given a markdown file with some front matter. I need a simple javascript function that will extract only the front matter. Here's an example markdown file:

```
---
title: "Latent States Project"
author: "John Doe"
date: 2023-09-18
# repo: felixludos/omni-fig
---

# Project fo the latent states

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl eget
```

This should extract an object like this:

```js
{
  title: "Latent States Project",
  author: "John Doe",
    date: "2023-09-18",
}
```