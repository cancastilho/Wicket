const path = require('path');
const webpack = require('webpack')

module.exports = {
  entry: './typescript-test.ts',
  mode: "production", 
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [
    // fix "process is not defined" error:
    // (do "npm install process" before running the build)
    new webpack.ProvidePlugin({
      process: 'process/browser',
    }),
  ],
  resolve: {
    fallback: {
        "fs": false,
        "util": false,
        "assert": false,
        "path": false 
      },
  }
};