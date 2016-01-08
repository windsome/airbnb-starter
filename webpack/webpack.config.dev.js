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
      test: /.*\.(png|gif|svg|jpg)$/,
      loader: 'file',
      include: path.join(__dirname, "..",  "app")
    },
    { test: /\.(woff|woff2)$/, loader:'file'},
    { test: /\.(ttf|eot)$/, loader:'file'},
    {
      test: /\.scss$/,
      loader: ExtractTextPlugin.extract('style-loader', 'css-loader?module&localIdentName=[local]!autoprefixer-loader!resolve-url!sass?sourceMap&includePaths[]=' + encodeURIComponent(path.resolve(__dirname, '..', 'app', 'scss')))
    }
];

module.exports = {
  name: 'browser',
  devtool: 'cheap-module-eval-source-map',
  context: path.join(__dirname, "..", "app"),
  entry: [
    'webpack-hot-middleware/client',
    './client'
  ],
  output: {
    path: path.join(__dirname, '..', 'dist', 'assets'),
    filename: 'bundle.js',
    publicPath: '/assets/'
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

}


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
