var configValues = require('./config');

module.exports = {
  getdbConnectionString: function() {
    return 'mongodb://' + configVallues.username + ':' + configValues.password + '';
  }
}