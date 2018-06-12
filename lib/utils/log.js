const chalk = require('chalk');

const success = msg => {
  console.log(chalk.green(msg));
};

const error = msg => {
  console.log(chalk.red(msg));
};

module.exports = {
  success,
  error,
};
