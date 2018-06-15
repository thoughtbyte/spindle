const pugPost = data =>
`---
title: ${data.title}
description: ${data.description}
---
extends ../layouts/post.pug
block title
  title #{title}
block description
  meta(name="description" content=\`\${description}\`)
block content
  a(href="../index.pug") home
  include:markdown-it 2018-06-11-sample-post.md
`;

module.exports = {
  pugPost,
};
