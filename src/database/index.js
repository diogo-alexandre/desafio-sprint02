const Sequelize = require('sequelize')
const dbConfig = require('../config/database.config')

const Project = require('../models/Project')
const Task = require('../models/Task')

class Database {
  constructor () {
    this.connection = new Sequelize(dbConfig)
    this.models = [Project, Task]
    this.init()
  }

  async init () {
    this.models.forEach(model => model.init(this.connection))

    Project.hasMany(Task, { foreignKey: 'projectId', as: 'tasks' })
    Task.belongsTo(Project, { foreignKey: 'projectId', as: 'tasks' })
  }
}

module.exports = new Database()
