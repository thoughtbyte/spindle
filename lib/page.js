const fs = require('fs-extra');
const inquirer = require('inquirer');
const cli = require('./utils/cli');
const templates = require('../templates/page');

const questions = [
  { name: 'title', message: 'page title:' },
  { name: 'description', message: 'page description:' },
];

const create = () => {
  inquirer.prompt(questions).then(answers => {
    try {
      if (!cli.insideSpindleProject()) {
        throw new Error('current working directory does not appear to be a spindle project');
      }
      fs.outputFileSync(`./src/${answers.title}.pug`, templates.pugPage(answers));
    } catch (error) {
      log.error(`error creating page: ${error}`);
      process.exit();
    }
    log.success(`page created successfully`);
  });
};

module.exports = {
  create,
};
