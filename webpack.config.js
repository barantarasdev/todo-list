const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const { EnvironmentPlugin, DefinePlugin } = require('webpack')
require('dotenv').config()

const isProduction = process.env.NODE_ENV === 'production'

const config = {
  entry: './src/index.tsx',
  mode: 'development',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  devServer: {
    open: true,
    host: 'localhost',
    historyApiFallback: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
      favicon: './public/favicon.ico',
    }),
    new MiniCssExtractPlugin({
      filename: isProduction ? '[name].[contenthash].css' : '[name].css',
    }),
    new DefinePlugin({
      'process.env': JSON.stringify(process.env),
    }),
    new EnvironmentPlugin(['BASE_URL']),
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/i,
        exclude: '/node_modules/',
        use: ['babel-loader'],
      },
      {
        test: /\.css$/i,
        exclude: '/node_modules/',
        use: [
          isProduction ? MiniCssExtractPlugin.loader : 'style-loader',
          'css-loader',
        ],
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
        type: 'asset',
      },
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    alias: {
      src: path.resolve(__dirname, 'src'),
    },
    extensions: ['.tsx', '.ts', '.js'],
  },
}

module.exports = () => {
  if (isProduction) {
    config.mode = 'production'
  }

  return config
}