const router = require('express').Router()
const TaskController = require('../controllers/task.controller')

router.options('/project/:projectId/task', (req, res) => {
  res.set('Acess-Control-Allow-Methods', 'GET, POST')
  res.status(201).end()
})

router.get('/project/:projectId/task', TaskController.findAll)
router.post('/project/:projectId/task', TaskController.insert)

router.options('/project/:projectId/task/:id', (req, res) => {
  res.set('Acess-Control-Allow-Methods', 'GET, PUT, DELETE')
  res.status(201).end()
})

router.get('/project/:projectId/task/:id', TaskController.findOne)
router.put('/project/:projectId/task/:id', TaskController.update)
router.delete('/project/:projectId/task/:id', TaskController.remove)
router.head('/project/:projectId/task/:id', TaskController.head)

module.exports = router
