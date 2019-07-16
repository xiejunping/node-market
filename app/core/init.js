import BaseCore from './base.class'
import Service from './context.class'

class b {
  constructor ({x, y}) {
    this.x = x
    this.y = y
  }

  toString () {
    return `(${this.x}, ${this.y})`
  }
}

class a extends b {
  constructor (options) {
    super(options)
    console.log(this)
  }
}

class app extends BaseCore {
  constructor (options) {
    super(options)
    console.log(this)

    // 实例的参数
    console.log(this.options)

    // conifig
    console.log(this.config)

    console.log(this.app)

    console.log(this.middleware)
  }
}

class UserService extends Service {
  constructor (ctx) {
    super(ctx)
  }

  async index () {
    console.log(this)
  }
}

new a({x: 1, y: 2})

new app()

const s = new UserService({app: 9});

(async () => {
  await s.index()
})()
