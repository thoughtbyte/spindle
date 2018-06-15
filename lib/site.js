const fs = require('fs-extra');
const path = require('path');
const inquirer = require('inquirer');
const log = require('./utils/log');
const cli = require('./utils/cli');
const packageJson = require('../templates/package.json.js');
const spindleConfig = require('../templates/spindle.config');

const questions = [
  { name: 'name', message: 'site name:' },
  { name: 'description', message: 'site description:' },
  { name: 'author', message: 'site author:' },
  {
    name: 'template-engine',
    message: 'template engine language:',
    type: 'list',
    choices: ['pug'],
  },
  {
    name: 'style-processing',
    message: 'css preprocessing',
    type: 'list',
    choices: ['scss'],
  },
];

const copyBase = name => {
  fs.copySync(path.resolve(`${path.dirname(require.main.filename)}/templates/base`), `./${name}`, {
    overwrite: false,
    errorOnExist: true,
  });
};

const create = siteName => {
  inquirer.prompt(questions).then(answers => {
    try {
      if (cli.insideSpindleProject()) {
        throw new Error('current working directory appears to be inside a spindle project');
      }
      copyBase(siteName);
      fs.outputFileSync(`./${siteName}/package.json`, packageJson(answers));
      fs.outputFileSync(`./${siteName}/spindle.config.js`, spindleConfig(answers));
    } catch (error) {
      log.error(`error creating site: ${error}`);
      process.exit();
    }
    log.success(`site ${siteName} created successfully`);
  });
};

module.exports = {
  create,
};
