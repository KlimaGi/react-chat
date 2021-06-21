//entry -> output
const path = require('path');
//console.log(path.join(__dirname, 'public'));
// to get absolute path of webpack.config.js
//in terminal -> node webpack.config.js
module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js'
  },
  devServer: {
    historyApiFallback :true
  }
};