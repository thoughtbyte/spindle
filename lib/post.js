const fs = require('fs-extra');
const inquirer = require('inquirer');
const log = require('./utils/log');
const cli = require('./utils/cli');
const templates = require('../templates/post');

const create = title => {
  const questions = [
    { name: 'title', message: 'post title:', default: title },
    { name: 'description', message: 'post description:' },
  ];
  inquirer.prompt(questions).then(answers => {
    try {
      if (!cli.insideSpindleProject()) {
        throw new Error('current working directory does not appear to be a spindle project');
      }
      fs.outputFileSync(`./src/posts/${answers.title}.pug`, templates.pugPost(answers));
      fs.outputFileSync(`./src/posts/${answers.title}.md`, '');
    } catch (error) {
      log.error(`error creating post: ${error}`);
      process.exit();
    }
    log.success(`post created successfully`);
  });
};

module.exports = {
  create,
};
