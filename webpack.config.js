var HTMLWebpackPlugin = require('html-webpack-plugin')

var HTMLWebpackPluginConfig = new HTMLWebpackPlugin({
  template: __dirname + '/app/index.html',
  filename: 'index.html',
  inject: 'body'
});

module.exports = {
  entry: ['@babel/polyfill', __dirname + '/app/index.js'],
  resolve: {
    extensions: ['.js', '.jsx', '.css']
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        // loader: 'babel-loader'
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      },
      {
        test:/\.(s*)css$/,
        use:['style-loader','css-loader', 'sass-loader']
      }
    ]
  },
  output: {
    filename: 'bundle.js',
    path: __dirname + '/build'
  },
  plugins: [HTMLWebpackPluginConfig],
  devtool: 'source-map',
  devServer: {
   // contentBase: DIST_FOLDER,
   port: 8080,
   // Send API requests on localhost to API server get around CORS.
   proxy: {
     '/api': {
       target: {
         host: "0.0.0.0",
         protocol: 'http:',
         port: 3000
       },
       pathRewrite: {
         '^/api': ''
       }
     }
   }
 }
};
