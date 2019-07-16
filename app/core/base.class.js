import KoaApplication from 'koa'
// const KoaApplication = require('koa')
// import Logger from './logger'
// import BaseController from './controller.class'
// import BaseService from './service.class'
import ContextClass from './context.class'
import Lifecycle from './lifecycle'

export default class BaseCore extends KoaApplication {

  constructor (options = {}) {

    // 默认值
    options.baseDir = options.baseDir || process.cwd()
    options.type = options.type || 'application'

    super()

    this.options = options

    // this.ctx = {}
    // this.logger = Logger

    // this.BaseController = BaseController
    // this.BaseService = BaseService

    this.ContextClass = ContextClass

    const Controller = this.ContextClass
    const Service = this.ContextClass

    this.Controller = Controller
    this.Service = Service

    this.lifecycle = new Lifecycle({
      baseDir: options.baseDir,
      app: this,
      logger: this.logger
    })
  }

  get baseDir () {
    return this.options.baseDir
  }

  get type () {
    return this.options.type
  }

  use (fn) {
    this.middleware.push(fn)
    return this
  }

  get loader () {
    return []
  }

  get router () {
    return router
  }


}
