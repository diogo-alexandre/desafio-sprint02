const express = require('express')

class App {
  constructor () {
    this.express = express()

    this.middlewares()
    this.routes()
  }

  middlewares () {

  }

  routes () {

  }
}

module.exports = new App().express
