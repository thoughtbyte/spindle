const fs = require('fs');

const getPostFilenames = () => fs.readdirSync('src/posts');

module.exports = {
  getPostFilenames,
};
