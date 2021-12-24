const BadRequest = require('../errors/BadRequest')
const NotFound = require('../errors/NotFound')
const Project = require('../models/Project')

class ProjectController {
  async findAll (req, res, next) {

  }

  async findOne (req, res, next) {

  }

  async insert (req, res, next) {
    try {
      const { title, description } = req.body

      if (!title) throw new BadRequest('"title" is required')
      if (!description) throw new BadRequest('"description" is required')

      await Project.create({ title, description })

      return res.status(201).end()
    } catch (err) {
      next(err)
    }
  }

  async update (req, res, next) {

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
