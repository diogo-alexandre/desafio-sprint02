const express = require('express')
const bodyParser = require('body-parser')

require('./database')
const projectRouter = require('./routes/project.routes')
const taskRouter = require('./routes/task.routes')

class App {
  constructor () {
    this.express = express()

    this.middlewares()
    this.routes()
  }

  middlewares () {
    this.express.use(bodyParser.urlencoded({ extended: true }))
    this.express.use(bodyParser.json())

    this.express.use((req, res, next) => {
      res.set('Acess-Control-Allow-Origin', '*')
      next()
    })
  }

  routes () {
    this.express.use('/asa/', taskRouter)
    this.express.use('/api/', projectRouter)
  }
}

module.exports = new App().express
