# node-market
基于 nodejs 营销系统

> 参照`egg`，使用了es6的import和export语法，简化和优美了写代码的方式

> 将来是要采用`Typescript`的，基于我还没有理解TS的精髓

# 使用

项目用了Babel 开发，开发环境可以直接使用 `babel-node app/index.js` 启动项目

但线上不允许用 这种方式，因为会很 `heavy`

需要先编译，再启动，详细请查看`pageage.json`

> nodejs 版本最好在8.11.0以上

#### 本地开发

`npm run dev`
&& 如果是yarn
`yarn dev`

#### 线上服务器

需要先编译代码，因为nodejs默认不支持babel，系统代码没有用TS，只是用了es6的import和export，so 要编译
`npm run build && npm run start` &&
`yarn build && yarn start`

> 如果线上环境 服务器是台 2核4G的vps ，nodejs的单线程把多核浪费，简单的可以用`pm2 start bin/www -i max` pm2会根据你的服务器核数去启动服务的个数

