const fs = require('fs-extra');

const insideSpindleProject = () => {
  const cwd = process.cwd();
  return fs.existsSync(`${cwd}/spindle.config.js`);
};

module.exports = {
  insideSpindleProject,
};
