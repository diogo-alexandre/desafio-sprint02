const express = require('express')
const bodyParser = require('body-parser')

require('./database')
const projectRouter = require('./routes/project.routes')
const taskRouter = require('./routes/task.routes')
const HttpError = require('./errors/http.error')

class App {
  constructor () {
    this.express = express()

    this.middlewares()
  }

  middlewares () {
    this.express.use(bodyParser.urlencoded({ extended: true }))
    this.express.use(bodyParser.json())

    this.express.use((req, res, next) => {
      res.set('Acess-Control-Allow-Origin', '*')
      next()
    })

    this.routes()

    this.express.use((err, req, res, next) => {
      if (err instanceof HttpError) {
        res.status(err.statusCode).send(err.message)
      } else {
        res.status(500).send('Internal server error')
      }
    })
  }

  routes () {
    this.express.use('/asa/', taskRouter)
    this.express.use('/api/', projectRouter)
  }
}

module.exports = new App().express
