const router = require('express').Router();
const { usersController } = require('../controllers');

// const { uploadMulter } = require('../helpers');
// const { isAuthorized } = require('../middlewares');


router.get('/', usersController.index);
router.post('/', usersController.create);
// router.get('/:id([0-9]+)', isAuthorized, usersController.get);
// router.get('/:url', usersController.getByUrl);
// router.patch('/:id', isAuthorized, uploadMulter.fields([{ name: 'avatar', maxCount: 1 }, { name: 'logos', maxCount: 5 }]), usersController.update);
// router.patch('/:token/update-password', usersController.updatePasswordByToken);

module.exports = router;
