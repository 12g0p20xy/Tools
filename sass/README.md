## Intro

编辑 src/style.scss 文件和 src/global.js 文件; js 插件丢到 src/js/plugins;

运行 grunt 会执行：

1、压缩合并输出至 dist/css 和 dist/js 目录

2、监视改动（按2次 ctrl+c 可关闭）

## Install

进入文件根目录，下载 grunt 所需插件

	npm install

## Usage

// 移动端自适应

使用.container包裹内容

// utils

@include inline-block

@include opacity(.6)

@include clearfix

// 水平垂直居中

@include vcenter

// 文本截取

单行 @include ellipsis

多行 @include ellipsis(3)

// css3

@include border-radius(4px)

@include translate(-50%) 或者 @include translate(-50%, -50%, 0)

@include box-shadow(3px 3px 6px rgba(0,0,0,.6));

@include transition(opacity .3s ease-out)
