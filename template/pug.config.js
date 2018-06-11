const path = require('path');
const pugHelpers = require('./src/scripts/pug-helpers');

module.exports = {
  basedir: path.resolve(__dirname + '/src'),
  locals: {
    ...pugHelpers,
  },
};
