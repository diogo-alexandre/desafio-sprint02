const HttpError = require('./http.error')

class BadRequest extends HttpError {
  constructor (message) {
    super(401, message)
  }
}

module.exports = BadRequest
