const BadRequest = require('../errors/BadRequest')
const NotFound = require('../errors/NotFound')
const Project = require('../models/Project')
const Task = require('../models/Task')

class ProjectController {
  async findAll (req, res, next) {
    try {
      const projects = await Project.findAll({
        include: [{
          model: Task,
          as: 'tasks',
          attributes: {
            exclude: ['projectId']
          }
        }]
      })
      return res.json(projects)
    } catch (err) {
      next(err)
    }
  }

  async findOne (req, res, next) {
    try {
      const project = await Project.findOne({
        where: { id: req.params.id },
        include: [{
          model: Task,
          as: 'tasks',
          attributes: {
            exclude: ['projectId']
          }
        }]
      })

      if (!project) throw new NotFound(`Project cannot be found project with "id" = ${req.params.id}`)

      return res.status(200).json(project)
    } catch (err) {
      next(err)
    }
  }

  async insert (req, res, next) {
    let project = null

    try {
      const { title, description, tasks = [] } = req.body

      if (!title) throw new BadRequest('"title" is required')
      if (!description) throw new BadRequest('"description" is required')

      project = await Project.create({ title, description }, { raw: true })

      for (let i = 0; i < tasks.length; i++) {
        if (!tasks[i].title) throw new BadRequest(`"task[${i}].title" is required`)
        if (!tasks[i].taskRelevance) throw new BadRequest(`"task[${i}].taskRelevance" is required`)
        if (typeof tasks[i].completed === 'undefined') throw new BadRequest(`"task[${i}].completed" is required`)

        tasks[i] = await Task.create({
          ...tasks[i],
          projectId: project.id
        })

        const { projectId, ...task } = tasks[i].dataValues
        tasks[i] = task
      }

      return res.status(201).json({
        ...project.dataValues,
        tasks
      })
    } catch (err) {
      if (project !== null) project.destroy()
      next(err)
    }
  }

  async update (req, res, next) {
    try {
      const { title, description } = req.body

      const project = await Project.findOne({ where: { id: req.params.id } })

      if (!project) throw new NotFound(`Project cannot be found project with "id" = ${req.params.id}`)

      if (title) project.title = title
      if (description) project.description = description

      await project.save()

      return res.status(200).json(project)
    } catch (err) {
      next(err)
    }
  }

  async remove (req, res, next) {
    try {
      const project = await Project.destroy({ where: { id: req.params.id } })
      if (!project) throw new NotFound(`Project cannot be found project with "id" = ${req.params.id}`)

      return res.status(204).end()
    } catch (err) {
      next(err)
    }
  }
}

module.exports = new ProjectController()
