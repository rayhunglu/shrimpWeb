const path = require('path');
const { DefinePlugin } = require('webpack');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  mode:'development',
  entry: './webapp/index.jsx', // Entry point of your application
  output: {
    filename: 'assets/app.js', // Name of the output bundle
    path: path.resolve(__dirname, 'public'), // Output directory
    publicPath: '/' // Public URL for the output files
  },
  resolve:{
    extensions:['.js', '.jsx']
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/, // Apply the following loader to .js files
        exclude: /node_modules/, // Don't apply it to files in node_modules
        use: {
          loader: 'babel-loader', // Use the babel-loader for transpilation
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'] // Use the preset for modern JavaScript
          }
        }
      },
      {
        test: /\.css$/i, // Apply the following loaders to .css files
        use: [
          'style-loader',
          { loader: 'css-loader', options: { url: false} },
          'postcss-loader'
        ] // Use these loaders to handle CSS files
      }
    ]
  },
  devtool:'eval-source-map',
  plugins: [
    new DefinePlugin({
      // Define global constants that can be accessed in your code
      'process.env.BASE_URL': JSON.stringify(process.env.BASE_URL || 'http://localhost:3000')
    }),
    new HtmlWebPackPlugin({
      template: './webapp/index.html', // Path to your HTML template
    }),
    new CopyPlugin({
      patterns: [
        { from: 'assets', to: 'assets' } // Copy assets folder to the output directory
      ]
    })
  ],
  watchOptions: {
    ignored: ['**/node_modules', '**/public']
  }
};