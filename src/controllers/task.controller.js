const Task = require('../models/Task')

class TaskController {
  async findAll (req, res, next) {
    try {
      const tasks = await Task.findAll({
        where: {
          projectId: req.params.projectId
        }
      })

      return res.json(tasks)
    } catch (err) {
      next(err)
    }
  }

  async findOne (req, res, next) {

  }

  async insert (req, res, next) {

  }

  async remove (req, res, next) {

  }

  async head (req, res, next) {

  }
}

module.exports = new TaskController()
