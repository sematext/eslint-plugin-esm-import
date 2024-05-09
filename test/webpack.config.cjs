const path = require('path');

module.exports = {
  context: path.resolve(__dirname, '.'),
  mode: 'development',
  devtool: 'cheap-module-source-map',
  entry: './src/index.js',
  resolve: {
    extensions: ['.tsx', '.ts', '.jsx', '.cjs', '.js', '.mjs', '.json'],
    mainFiles: ['index'],
    fullySpecified: true,
    enforceExtension: true,
    extensionAlias: {
      '.js': [
        '.ts',
        '.tsx',
        '.d.ts',
      ],
    },
    alias: {
      Dir: path.resolve(__dirname, 'dir'),
    },
    modules: [
      'node_modules',
    ],
  },
  output: {
    path: '/dist',
    filename: 'bundle.js',
    publicPath: 'auto',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [{
          loader: 'babel-loader'
        }]
      }
    ]
  }
};
