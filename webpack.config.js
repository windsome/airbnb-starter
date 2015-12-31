var path = require('path')
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var webpack = require('webpack')

module.exports = [ {
  name: 'browser',
  devtool: 'cheap-module-eval-source-map',
  entry: [
    'webpack-hot-middleware/client',
    './app/client'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/dist/'
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new ExtractTextPlugin("styles/main.css"),
    new webpack.NoErrorsPlugin()
  ],
  module: {
    loaders: [
    {
      test: /\.js$|\.jsx$/,
      loaders: [ 'babel' ],
      exclude: /node_modules/,
      include: __dirname
    }, 
    { test: /\.json$/, loader: "json-loader" },
    {
      test: /\.css?$/,
      loaders: [ 'style', 'raw' ],
      include: __dirname
    },
    {
      test: /.*\.(png|gif|svg|jpg)$/i,
      loader: 'file'
    },
    {
      test: /\.scss$/,
      loader: ExtractTextPlugin.extract('style-loader', 'css-loader?module&localIdentName=[local]__[hash:base64:5]!autoprefixer-loader!sass?includePaths[]=' + encodeURIComponent(path.resolve(__dirname, 'app', 'scss')))
    }

    ]
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
  entry: [
    './app/server'
  ],
  target: 'node',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.server.js',
    publicPath: '/dist/'
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new ExtractTextPlugin("styles/main.css"),
    new webpack.NoErrorsPlugin()
  ],
  module: {
    loaders: [
    {
      test: /\.js$|\.jsx$/,
      loaders: [ 'babel' ],
      exclude: /node_modules/,
      include: __dirname
    }, 
    { test: /\.json$/, loader: "json-loader" },
    {
      test: /\.css?$/,
      loaders: [ 'style', 'raw' ],
      include: __dirname
    },
    {
      test: /.*\.(png|gif|svg|jpg)$/i,
      loader: 'file'
    },
    {
      test: /\.scss$/,
      loader: ExtractTextPlugin.extract('style-loader', 'css-loader?module&localIdentName=[local]__[hash:base64:5]!autoprefixer-loader!sass?includePaths[]=' + encodeURIComponent(path.resolve(__dirname, 'app', 'scss')))
    }

    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx', '.scss'],
    modulesDirectories: [
      "app", "node_modules"
    ]
  }

}]


/*
// When inside Redux repo, prefer src to compiled version.
// You can safely delete these lines in your project.
var reduxSrc = path.join(__dirname, '..', '..', 'src')
var reduxNodeModules = path.join(__dirname, '..', '..', 'node_modules')
var fs = require('fs')
if (fs.existsSync(reduxSrc) && fs.existsSync(reduxNodeModules)) {
  // Resolve Redux to source
  module.exports.resolve = { alias: { 'redux': reduxSrc } }
  // Compile Redux from source
  module.exports.module.loaders.push({
    test: /\.js$/,
    loaders: [ 'babel' ],
    include: reduxSrc
  })
}
*/
