const express = require('express');
const router = express.Router();
const usersController = require('../../controllers/users.controller')

router.get('/user/random', usersController.getRandomUser)
router.get('/user/all', usersController.getAllUsers)
router.post('/user/save', usersController.saveUsers)
router.patch('/user/update/:id', usersController.updateUsers)
router.delete('/user/delete/:id', usersController.deleteUsers)

module.exports=router;