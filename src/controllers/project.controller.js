const BadRequest = require('../errors/badRequest')
const Project = require('../models/Project')

class ProjectController {
  async findAll (req, res) {

  }

  async findOne (req, res) {

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

  async update (req, res) {

  }

  async remove (req, res) {

  }
}

module.exports = new ProjectController()
