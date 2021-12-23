const express = require('express')

const productRouter = require('./routes/product.routes')

class App {
  constructor () {
    this.express = express()

    this.middlewares()
    this.routes()
  }

  middlewares () {

  }

  routes () {
    this.express.use('/api/', productRouter)
  }
}

module.exports = new App().express
