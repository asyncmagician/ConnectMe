const express = require('express')
const router = express.Router()

const ctrl = require('../controllers/authController')

router.post('/signUp', ctrl.register)

router.post('/signIn', ctrl.login)

module.exports = router
