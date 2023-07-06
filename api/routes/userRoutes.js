const express = require('express')
const router = express.Router()

const ctrl = require('../controllers/userController')

router.get('/', ctrl.getAllUser)

router.get('/:id', ctrl.getUser)

router.delete('/', ctrl.deleteUser)

module.exports = router
