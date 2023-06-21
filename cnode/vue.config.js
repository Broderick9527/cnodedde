const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  productionSourceMap: false,
  publicPath: './',
  transpileDependencies: true
})
