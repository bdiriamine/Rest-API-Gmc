const express = require('express');
const router = express.Router();
const userControllers  = require('../controllers/userControllers');


router.get('/', userControllers.getAllUsers);
router.post('/', userControllers.addUser);

router.put('/:id', userControllers.updateUser);

router.delete('/:id', userControllers.deleteUser);

module.exports = router;