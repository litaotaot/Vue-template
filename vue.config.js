'use strict'
const path = require('path')

function getPath(dir) {
  return path.join(__dirname, dir)
}

const name = 'BGI Operation'

const port = process.env.port || process.env.npm_config_port || 9528

module.exports = {
  publicPath: '/',
  outputDir: 'dist',
  assetsDir: 'static',
  indexPath: 'index.html',
  lintOnSave: process.env.NODE_ENV === 'development', // 编译警告环境
  productionSourceMap: false, // 是否需要生产环境得 source map

  devServer: {
    port,
    overlay: {
      warnings: true,
      errors: true
    },
    proxy: {
      '/api': {
        target: 'www.baidu.com', // target host
        changeOrigin: true, // needed for virtual hosted sites
        ws: true, // proxy websockets
        pathRewrite: {
          // '^/api/old-path': '/api/new-path', // rewrite path
          '^/apis': ''
        }
      }
    }
  },

  css: {
    loaderOptions: {
      sass: {
        additionalData: `@import "@/style/variables.scss";`
      }
      // postcss: {
      //   // options here will be passed to postcss-loader
      // }
    }
  },
  configureWebpack: {
    name,
    resolve: {
      alias: {
        '@': getPath('src'),
        'cps': getPath('src/components')
      }
    }
  },

  chainWebpack: config => {
    config.entry.app = ['./src/main.js'] // 设置入口文件
    config.plugins.delete('preload') // 移除 preload 预加载插件
    config.plugins.delete('prefetch') // 移除 prefetch 预读取插件

    // 原有的svg图像处理loader添加exclude
    config.module
      .rule('svg')
      .exclude.add(getPath('src/assets/icons'))
      .end()

    // 对svg的优雅处理
    config.module
      .rule('svgIcon')
      .test(/\.svg$/)
      .include.add(getPath('src/assets/icons/svg'))
      .end()
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .tap(options => {
        options = {
          symbolId: 'icon-[name]'
        }
        return options
      })
      .end()

    config.module
      .rule('vue')
      .use('vue-loader')
      .loader('vue-loader')
      .tap(options => {
      // 修改选项
        options.compilerOptions.preserveWhitespace = true // 空格保留
        return options
      })
      .end()

    config
    // https://webpack.js.org/configuration/devtool/#development
      .when(process.env.NODE_ENV === 'development',
        config => {
          config.devtool('cheap-source-map')
        }
      )

    config
      .when(process.env.NODE_ENV !== 'development',
        config => {
          config
            .plugin('ScriptExtHtmlWebpackPlugin')
            .after('html')
            .use('script-ext-html-webpack-plugin', [{
              // `runtime` must same as runtimeChunk name. default is `runtime`
              inline: /runtime\..*\.js$/
            }])
            .end()
          config
            .optimization.splitChunks({
              chunks: 'all',
              cacheGroups: {
                libs: {
                  name: 'chunk-libs',
                  test: /[\\/]node_modules[\\/]/,
                  priority: 10,
                  chunks: 'initial' // only package third parties that are initially dependent
                },
                elementUI: {
                  name: 'chunk-elementUI', // split elementUI into a single package
                  priority: 20, // the weight needs to be larger than libs and app or it will be packaged into libs or app
                  test: /[\\/]node_modules[\\/]_?element-ui(.*)/ // in order to adapt to cnpm
                },
                commons: {
                  name: 'chunk-commons',
                  test: getPath('src/components'), // can customize your rules
                  minChunks: 3, //  minimum common number
                  priority: 5,
                  reuseExistingChunk: true
                }
              }
            })
          config.optimization.runtimeChunk('single')
        }
      )
  }
}
