const express = require('express')
const bodyParser = require('body-parser')

require('./database')
const projectRouter = require('./routes/project.routes')

class App {
  constructor () {
    this.express = express()

    this.middlewares()
    this.routes()
  }

  middlewares () {
    this.express.use(bodyParser.urlencoded({ extended: true }))
    this.express.use(bodyParser.json())
  }

  routes () {
    this.express.use('/api/', projectRouter)
  }
}

module.exports = new App().express
