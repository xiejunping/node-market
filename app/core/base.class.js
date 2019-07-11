import KoaApplication from 'koa'
import Logger from './logger'
import BaseController from './controller.class'
import BaseService from './service.class'

class BaseCore extends KoaApplication {
  constructor (options = {}) {
    options = Object.assign({}, {
      baseDir = process.cwd(),
      type = 'application'
    }, options)

    super()

    this.options = options

    this.ctx = {}
    this.logger = Logger

    this.BaseController = BaseController
    this.BaseService = BaseService
  }


}

export default BaseCore
