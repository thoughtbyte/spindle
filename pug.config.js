const pugHelpers = require('./src/scripts/pug-helpers');

module.exports = {
  basedir: './src',
  locals: {
    ...pugHelpers,
  },
};
