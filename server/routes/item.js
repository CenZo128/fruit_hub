const router = require('express').Router()
const itemController = require('../controllers/itemController.js')


router.get('/', itemController.getAll)

module.exports = router 