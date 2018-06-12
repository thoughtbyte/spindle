const fs = require('fs-extra');
const inquirer = require('inquirer');

const questions = [
  { name: 'title', message: 'post title:', default: 'todays-date' },
  { name: 'description', message: 'post description:' },
];

const create = () => {
  inquirer.prompt(questions).then(answers => {
    console.log(answers);
  });
};

module.exports = {
  create,
};
