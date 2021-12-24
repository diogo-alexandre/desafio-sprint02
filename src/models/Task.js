const Sequelize = require('sequelize')

class Task extends Sequelize.Model {
  static init (sequelize) {
    super.init({
      title: Sequelize.STRING,
      taskRelevance: Sequelize.INTEGER,
      completed: Sequelize.BOOLEAN
    }, { sequelize })

    return this
  }
}

module.exports = Task
