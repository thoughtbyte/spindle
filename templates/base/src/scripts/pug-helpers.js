const fs = require('fs');
const matter = require('gray-matter');

const isPugFile = file => file.substr(file.length - 3) === 'pug';

const getPostContent = file => matter(fs.readFileSync(`src/posts/${file}`));

const getPosts = () =>
  fs
    .readdirSync('src/posts')
    .filter(file => isPugFile(file))
    .map(post => {
      const postContent = getPostContent(post);
      return { file: post, content: postContent.content, data: postContent.data };
    });

module.exports = {
  getPosts,
};
