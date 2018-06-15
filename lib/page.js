const fs = require('fs-extra');
const inquirer = require('inquirer');
const log = require('./utils/log');
const cli = require('./utils/cli');
const templates = require('../templates/page');

const create = title => {
  const questions = [
    { name: 'title', message: 'page title:', default: title },
    { name: 'description', message: 'page description:' },
  ];
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
