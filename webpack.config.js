var path = require('path');
var SRC_DIR = path.join(__dirname, '/client');
var DIST_DIR = path.join(__dirname, '/react-client/dist');
module.exports = {
  entry: `${__dirname}/client/index.js`,
  output: {
    path: __dirname + '/public',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?/,
        include: SRC_DIR,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015']
        }
      }
    ]
  }
};