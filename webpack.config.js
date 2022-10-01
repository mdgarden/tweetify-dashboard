const path = require('path');

const { NODE_ENV = 'production' } = process.env;

module.exports = {
  entry: './server/index.ts',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  mode: NODE_ENV,
  target: 'node',
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
    fallback: {
      fs: false,
      async_hooks: false,
    },
  },
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'build'),
  },
};
