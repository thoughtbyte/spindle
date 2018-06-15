const pugPage = data =>
  `
---
title: ${data.title}
description: ${data.description}
---
extends layouts/main.pug
block title
  title #{title}
block description
  meta(name="description" content=\`${description}\`)
block content
  p hello worlds!
  a(href="posts.pug") posts
`;

module.exports = {
  pugPage,
};
