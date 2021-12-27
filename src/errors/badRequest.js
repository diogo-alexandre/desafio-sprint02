const HttpError = require('./http.error')

class BadRequest extends HttpError {
  constructor (message) {
    super(400, message)
  }
}

module.exports = BadRequest
