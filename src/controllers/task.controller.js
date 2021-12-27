const NotFound = require('../errors/NotFound')
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
    try {
      const task = await Task.findOne({
        where: {
          projectId: req.params.projectId,
          id: req.params.id
        }
      })

      if (!task) throw new NotFound(`Task cannot be found project with "id" = ${req.params.id}`)

      res.set('Last-Modified', (new Date(task.updatedAt)).getTime())

      return res.status(200).json(task)
    } catch (err) {
      next(err)
    }
  }

  async insert (req, res, next) {

  }

  async update (req, res, next) {

  }

  async remove (req, res, next) {

  }

  async head (req, res, next) {

  }
}

module.exports = new TaskController()
