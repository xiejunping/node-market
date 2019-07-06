import path from 'path'
import favicon from 'koa-favicon'
import koaStatic from 'koa-static'

const connect = app => {
  // 静态目录
  app.use(koaStatic(path.join(__dirname, '../../public/'), { maxAge: 60000 * 1440 * 30 }))

  // 网站图标
  app.use(favicon(path.join(__dirname, '../../public/images/favicon.ico')))
}

export default connect
