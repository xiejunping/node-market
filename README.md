# node-market
基于 nodejs 营销系统

> 参照`egg`，使用了es6的import和export语法，简化和优美了写代码的方式

> 将来是要采用`Typescript`的，基于我还没有理解TS的精髓

# 使用

项目用了Babel 开发，开发环境可以直接使用 `babel-node bin/dev.js` 启动项目

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

* build 
`build`命令主要是用babel-cli 编译本地src下的代码，因为src里是用es6的modules模式写的，默认node运行代码是不支持的，编译产生的代码生成到根目录的dist文件夹中

* start 
`start`命令主要是用node启动，dist目录下的index.js文件，启动koa服务，问题的关键是bin下的www文件没有进行编译，没有编译的文件没法require ES6模式下的export default的文件，只能引入export 导出的文件，为了兼容在www文件中做了require的处理

> 如果线上环境 服务器是台 2核4G的vps ，nodejs的单线程把多核浪费，简单的可以用`pm2 start bin/www -i max` pm2会根据你的服务器核数去启动服务的个数

