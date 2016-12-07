var configValues = require('./config');

module.exports = {

  getDbConnectionString: function() {
    return 'mongodb://' + configValues.uname + ':' + configValues.pwd + '@ds129018.mlab.com:29018/eznodesandbox';
  }
}
