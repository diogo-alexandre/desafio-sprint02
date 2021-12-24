const Sequelize = require('sequelize')

class Project extends Sequelize.Model {
  static init (sequelize) {
    super.init({
      title: Sequelize.STRING,
      description: Sequelize.TEXT
    }, { sequelize })
  }
}

module.exports = Project
