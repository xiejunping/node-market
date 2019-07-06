import fs from 'fs'
import path from 'path'
import Router from 'koa-router'

const router = new Router()

const root = app => {
  router.get('/', ctx => {
    ctx.type = 'html'
    ctx.body = fs.createReadStream(path.resolve(__dirname, '../../public/index.html'))
  })

  app.use(router.routes()).use(router.allowedMethods())
}

export default root
