const path = require('path');

module.exports = {
  devtool: "source-map",
  entry: './tsc-output/main.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  }
};