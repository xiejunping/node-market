export default class BaseController {
  constructor (ctx) {
    this.ctx = ctx
    this.config = ctx.app.config
    this.app = ctx.app
  }
}
