/* eslint-disable @typescript-eslint/no-var-requires, @typescript-eslint/explicit-function-return-type */
const glob = require('glob')
const TerserPlugin = require('terser-webpack-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const SpriteLoaderPlugin = require('svg-sprite-loader/plugin')
const PurgecssPlugin = require('purgecss-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ScriptExtHtmlWebpackPlugin = require('script-ext-html-webpack-plugin')

module.exports = (env, { mode }) => {
  const devMode = mode === 'development'
  const prodMode = !devMode

  return {
    devtool: devMode ? 'cheap-module-eval-source-map' : 'source-map',
    output: {
      publicPath: '/',
      filename: devMode ? '[name].js' : '[name].[contenthash].js'
    },
    resolve: {
      extensions: ['.ts', '.tsx', '.js'],
      alias: {
        wouter: 'wouter/preact'
      }
    },
    optimization: {
      minimizer: [
        // See defaults https://github.com/webpack/webpack/blob/master/lib/WebpackOptionsDefaulter.js
        new TerserPlugin({ cache: true, parallel: true, sourceMap: true }),
        new OptimizeCSSAssetsPlugin({
          cssProcessorOptions: {
            map: {
              // Enables source maps, see NMFR/optimize-css-assets-webpack-plugin#53
              inline: false
            }
          }
        })
      ]
    },
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader'
          }
        },
        {
          test: /\.scss$/,
          use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
        },
        {
          test: /\.(jpe?g|png|ico)$/i,
          use: {
            loader: 'file-loader',
            options: {
              name: devMode ? '[name].[ext]' : '[name].[hash].[ext]'
            }
          }
        },
        {
          test: /\.svg$/,
          use: {
            loader: 'svg-sprite-loader',
            options: {
              extract: true,
              spriteFilename: devMode ? 'icons.svg' : 'icons.[hash].svg'
            }
          }
        }
      ]
    },
    plugins: [
      new SpriteLoaderPlugin(),
      new MiniCssExtractPlugin({
        filename: devMode ? '[name].css' : '[name].[contenthash].css'
      }),
      prodMode &&
        new PurgecssPlugin({
          paths: glob.sync('src/**/*', { nodir: true })
        }),
      new HtmlWebpackPlugin({
        template: 'src/assets/index.html',
        favicon: 'src/assets/favicon.ico'
      }),
      new ScriptExtHtmlWebpackPlugin({
        defaultAttribute: 'defer'
      })
    ].filter(Boolean),
    devServer: {
      open: true,
      port: 3000,
      compress: true,
      historyApiFallback: true,
      proxy: {
        '/blog/*.json': 'http://localhost:5000'
      }
    }
  }
}
