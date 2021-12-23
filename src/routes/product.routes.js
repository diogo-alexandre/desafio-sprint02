const router = require('express').Router()
const projectController = require('../controllers/project.controller')

router.get('/project', projectController.findAll)
router.get('/project/:id', projectController.findOne)
router.post('/project/:id', projectController.insert)
router.put('/project/:id', projectController.update)
router.delete('/project/:id', projectController.remove)

module.exports = router
