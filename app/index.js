import Koa from 'koa'
import { api, connect, sess, router, mysql } from './middleware/index'

const app = new Koa()

api(app)
connect(app)
// sess(app)
// router(app)
// mysql(app)

export default app
