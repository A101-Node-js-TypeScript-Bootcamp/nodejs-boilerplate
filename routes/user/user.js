const express = require('express');
let router = express.Router();
let userController = require('../../controllers/User')

router.get('/', userController.fetchUser);
router.post('/', userController.addUser);
router.put('/',userController.put)
router.delete('/',userController.fetchDelete)

router.post('/register',userController.register)
router.post('/login',userController.login)

module.exports = router;