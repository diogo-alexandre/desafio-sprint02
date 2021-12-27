const BadRequest = require('../errors/BadRequest')
const NotFound = require('../errors/NotFound')
const Project = require('../models/Project')
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
    try {
      const { title, taskRelevance, completed } = req.body

      if (!title) throw new BadRequest('"title" is required')
      if (!taskRelevance) throw new BadRequest('"taskRelevance" is required')
      if (typeof completed === 'undefined') throw new BadRequest('"completed" is required')

      const project = await Project.findOne({ where: { id: req.params.projectId } })

      if (!project) throw new NotFound(`"Project" with id = ${req.params.projectId} was not found`)

      const task = await Task.create({
        title,
        taskRelevance,
        completed,
        projectId: project.id
      })

      res.set('Last-Modified', (new Date(task.updatedAt)).getTime())
      res.set('Location', `/api/project/${task.projectId}/task/${task.id}`)

      return res.status(201).json(task)
    } catch (err) {
      next(err)
    }
  }

  async update (req, res, next) {
    try {
      const { title, taskRelevance, completed } = req.body

      const project = await Project.findOne({
        where: {
          id: req.params.projectId
        },
        include: [{
          model: Task,
          as: 'tasks'
        }]
      })

      if (!project) throw new NotFound(`Cannot be found project with "id" = ${req.params.projectId}`)

      const task = project.tasks.find(taskModel => {
        const task = taskModel.dataValues
        return task.id === parseInt(req.params.id)
      })

      if (task === undefined) throw new NotFound(`Cannot be found task with "id" = ${req.params.id}`)

      if (title) task.title = title
      if (taskRelevance) task.taskRelevance = taskRelevance
      if (typeof completed === 'boolean') task.completed = completed

      await task.save()

      res.set('Last-Modified', (new Date(project.updatedAt)).getTime())

      return res.status(200).json(task)
    } catch (err) {
      next(err)
    }
  }

  async remove (req, res, next) {
    try {
      const project = await Project.findOne({
        where: {
          id: req.params.projectId
        },
        include: [{
          model: Task,
          as: 'tasks'
        }]
      })

      if (!project) throw new NotFound(`Cannot be found project with "id" = ${req.params.projectId}`)

      const task = project.tasks.find(taskModel => {
        const task = taskModel.dataValues
        return task.id === parseInt(req.params.id)
      })

      if (task === undefined) throw new NotFound(`Cannot be found task with "id" = ${req.params.id}`)

      await task.destroy()

      return res.status(204).end()
    } catch (err) {
      next(err)
    }
  }

  async head (req, res, next) {

  }
}

module.exports = new TaskController()
