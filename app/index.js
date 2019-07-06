import Koa from 'koa'
import { Api, Connect, sess, router, mysql } from './middleware/index'

const app = new Koa()

Api(app)
Connect(app)
// sess(app)
// router(app)
// mysql(app)

module.exports = app
