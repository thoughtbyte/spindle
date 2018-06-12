const fs = require('fs-extra');
const path = require('path');
const log = require('./utils/log');
const cli = require('./utils/cli');

const create = siteName => {
  try {
    if (cli.insideSpindleProject()) {
      throw new Error('current working directory appears to be inside a spindle project');
    }
    fs.copySync(path.resolve(`${path.dirname(require.main.filename)}/template`), `./${siteName}`, {
      overwrite: false,
      errorOnExist: true,
    });
  } catch (error) {
    log.error(`error creating site: ${error}`);
    process.exit();
  }
  log.success(`site ${siteName} created successfully`);
};

module.exports = {
  create,
};
