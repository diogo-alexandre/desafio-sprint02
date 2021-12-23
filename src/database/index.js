const Sequelize = require('sequelize')
const dbConfig = require('../config/database.config')

class Database {
  constructor () {
    this.connection = new Sequelize(dbConfig)
    this.loadModels().forEach(model => model.init(this.connection))
  }

  async loadModels () {
    return []
  }
}

module.exports = new Database()
