const path = require('path') // import path from 'path'
const webpack = require('webpack') // import webpack extras

// Extra plugiun to inject the bundle tag into our HTML file
const HtmlWebpackPlugin = require('html-webpack-plugin')

// Export a function that will receive command line args and return
// the webpack config object.
module.exports = (env, argv) => {
  const config = {
    // Main code entrypoint
    entry: {
      app: path.join(__dirname, 'client/index.js')
    },

    // Bundled output
    output: {
      filename: '[name].bundle.js',
      path: path.join(__dirname, 'public')
    },

    optimization: {
      splitChunks: {
        cacheGroups: {
          commons: {
            test: /[\\/]node_modules[\\/]/,
            name: 'vendors',
            chunks: 'all'
          }
        }
      }
    },

    // Rules for processing all included files
    module: {
      rules: [{
        // CSS files: Transpiles to JSS, needed for Bootstrap
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }, {
        // JS & JSX files: Transpiles with Babel to legacy JavaScript
        // NOTE: If react is not being used, remove the 'preset-react' entry
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
            plugins: ['@babel/plugin-transform-async-to-generator']
          }
        }
      }]
    },

    // Define extra webpack plugins
    plugins: [
      // Configure our HTML script injection plugin
      new HtmlWebpackPlugin({
        template: path.join(__dirname, 'client/index.html'),
        filename: path.join(__dirname, 'public/index.html')
      }),
      // Add global references to jquery and popper (for Bootstrap)
      new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery',
        'window.jQuery': 'jquery',
        Popper: ['popper.js', 'default']
      })
    ]
  }

  // Add minification of files when in production mode
  if (argv.mode === 'production') {
    config.module.rules[1].use.options.presets.push('minify')
  }

  // Enable extra development mode options (source maps and the dev server)
  if (argv.mode === 'development') {
    config.devtool = 'inline-source-map'

    // webpack-dev-server configuration
    config.devServer = {
      contentBase: path.join(__dirname, 'public'),
      compress: true,
      port: 9000
    }
  }

  // Return the final webpack configuration
  return config
}
