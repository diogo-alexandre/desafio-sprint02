const HttpError = require('./http.error')

class NotFound extends HttpError {
  constructor (message) {
    super(404, message)
  }
}

module.exports = NotFound
