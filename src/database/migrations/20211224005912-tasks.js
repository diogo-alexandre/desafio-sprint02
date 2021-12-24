'use strict'

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.createTable('tasks', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
      },
      projectId: {
        type: Sequelize.INTEGER,
        onDelete: 'CASCADE',
        references: {
          model: 'Projects',
          ket: 'id',
          as: 'projectId'
        }
      },
      title: {
        type: Sequelize.STRING,
        allowNull: false
      },
      taskRelevance: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      completed: {
        type: Sequelize.BOOLEAN,
        allowNull: false
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false
      }
    })
  },

  down: async (queryInterface, Sequelize) => {
    return await queryInterface.dropTable('tasks')
  }
}
