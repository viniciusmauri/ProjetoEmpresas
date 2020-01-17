const router = require('express').Router();
const { usersController } = require('../controllers');
const { isAuthorized } = require('../middlewares');

router.get('/', usersController.index);
router.post('/', usersController.create);
router.get('/:id([0-9]+)', isAuthorized, usersController.get);
router.post('/auth/signin', usersController.authenticate);

module.exports = router;
