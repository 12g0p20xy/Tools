// 添加资源
require("./css/style1.css")
require("./css/style2.css")
require("./less/app.less")

// 添加 js 模块
document.write(require('./js/module.js'))

// 载入图片资源
var img = document.createElement('img')
img.src = require('./img/cover.jpg')      
document.body.appendChild(img)

document.write('Hello world!')

// ES6
var sum = (x, y) => x + y
console.log(sum(1, 2));
