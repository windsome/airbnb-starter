var path = require('path')
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var webpack = require('webpack')

var commonLoaders = [
    {
      test: /\.js$|\.jsx$/,
      loaders: [ 'babel' ],
      exclude: /node_modules/,
      include: path.join(__dirname, "..",  "app")
    }, 
    { test: /\.json$/, loader: "json-loader" },
    {
      test: /\.css?$/,
      loaders: [ 'style', 'raw' ],
      include: path.join(__dirname, "..",  "app")
    },
    {
      test: /.*\.(png|gif|svg|jpg)$/i,
      loader: 'file',
      include: path.join(__dirname, "..",  "app")
    },
    {
      test: /\.scss$/,
      loader: ExtractTextPlugin.extract('style-loader', 'css-loader?module&localIdentName=[local]__[hash:base64:5]!autoprefixer-loader!sass?includePaths[]=' + encodeURIComponent(path.resolve(__dirname, '..', 'app', 'scss')))
    }
];

module.exports = [ {
  name: 'browser',
  devtool: 'cheap-module-eval-source-map',
  context: path.join(__dirname, "..", "app"),
  entry: [
    './client'
  ],
  output: {
    path: path.join(__dirname, '..', 'dist', 'assets'),
    filename: 'bundle.js',
    publicPath: 'assets/'
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new ExtractTextPlugin("styles/main.css"),
    new webpack.NoErrorsPlugin()
  ],
  module: {
    loaders: commonLoaders
  },
  resolve: {
    extensions: ['', '.js', '.jsx', '.scss'],
    modulesDirectories: [
      "app", "node_modules"
    ]
  }

},
{
  name: 'server',
  context: path.join(__dirname, "..", "app"),
  entry: [
    './server'
  ],
  target: 'node',
  output: {
    path: path.join(__dirname, '..', 'dist', 'assets'),
    filename: 'bundle.server.js',
    publicPath: 'assets/',
    libraryTarget: 'commonjs2'
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new ExtractTextPlugin("styles/main.css"),
    new webpack.NoErrorsPlugin()
  ],
  module: {
    loaders: commonLoaders
  },
  resolve: {
    extensions: ['', '.js', '.jsx', '.scss'],
    modulesDirectories: [
      "app", "node_modules"
    ]
  }

}]

