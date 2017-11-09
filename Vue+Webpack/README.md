## 简介

一个比较适合自己使用习惯的 Webpack + Vue 文档模板，以及一些常用的依赖。

## 文档结构

![](tree.jpg)

使用绝对路径引用 `static` 文件夹的文件（不做处理）：

`<img src="static/smile.gif">`

使用相对路径引用 `assets` 文件夹的文件（相当于作为模块来加载）：

`<img src="../assets/logo.png">`

使用相对路径在 css/less 中引用图片：

`background: url(../../static/cover.jpg) no-repeat;`

## 解决 Webpack 打包后写在 css 里的图片路径错误的问题

1、修改 `config/index.js`

```js
assetsSubDirectory: 'static',
assetsPublicPath: './',
```

2、修改 `build/webpack.prod.conf.js`

```js
new ExtractTextPlugin({
  // filename: utils.assetsPath('css/[name].[contenthash].css')
  filename: '[name].[contenthash].css'
}),
```

[来源](https://github.com/vuejs/vue-cli/issues/179)

## 输出生产文件

最终生成到 `/dist` 的文件需要在服务器环境下才可以正常浏览，可以在本机安装 `http-server` 模拟服务器环境：

全局安装 `http-server`：

`npm install http-server -g`

安装好后运行：

`http-server -p 3000 -o`

在浏览器里访问 http://127.0.0.1:3000/dist 即可浏览生成的网页。