const path = require('path')

module.exports = {
  devtool: 'source-map',
  entry: path.resolve(__dirname, 'public', 'index.js'),
  mode: "development",
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  resolve: {
      extensions: ['.Webpack.js', '.web.js', '.ts', '.js', '.jsx', '.tsx']
  },
  module: {
      rules: [
          {
              test: /\.js$/,
              exclude: /(node_modules)/,
              use: {
                  loader: 'babel-loader',
                  options: {
                    presets: [[
                        '@babel/preset-env', {
                            targets: {
                                esmodules: true
                            }
                        }],
                        '@babel/preset-react']
                  }
              }
          }
      ]
  },
  optimization: {
      minimize: false
  },
}
