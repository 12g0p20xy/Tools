## Intro

前端模板


编辑src/style.scss文件和src/global.js文件; js插件丢到src/js/plugins;

运行grunt会输出至dist/css和dist/js目录

## Install

进入文件根目录，下载grunt所需插件

	npm install

## Usage

// 移动端

@include mobile

// utils

@include inline-block

@include opacity(.6)

@include clearfix

// 水平垂直居中

@include vercenter

// 文本截取

单行 @include ellipsis

多行 @include ellipsis(3)

// css3

@include border-radius(4px)

@include translate(-50%) 或者 @include translate(-50%, -50%, 0)

@include box-shadow(3px 3px 6px rgba(0,0,0,.6));

@include transition(opacity .3s ease-out)
