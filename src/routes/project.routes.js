const router = require('express').Router()
const projectController = require('../controllers/project.controller')

router.options('/project', (req, res) => {
  res.set('Acess-Control-Allow-Methods', 'GET, POST')
  res.status(201).end()
})

router.get('/project', projectController.findAll)
router.post('/project', projectController.insert)

router.options('/project/:id', (req, res) => {
  res.set('Acess-Control-Allow-Methods', 'GET, PUT, DELETE')
  res.status(201).end()
})

router.get('/project/:id', projectController.findOne)
router.put('/project/:id', projectController.update)
router.delete('/project/:id', projectController.remove)
router.head('/project/:id', projectController.head)

module.exports = router
