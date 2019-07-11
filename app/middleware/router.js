import path from 'path'
import glob from 'glob'

const routesPath = path.resolve(__dirname, '../routes')

const router = app => {
  glob.sync(path.resolve(routesPath, '/*.js')).forEach(path => {
    const route = rq
  })
}

export default router
