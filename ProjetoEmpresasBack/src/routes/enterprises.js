const router = require('express').Router();
const { isAuthorized } = require('../middlewares');
const { enterprisesController } = require('../controllers');

router.get('/', enterprisesController.index);
router.get('/:id', enterprisesController.getById);

router.post('/', isAuthorized, enterprisesController.create);
router.post('/:id', enterprisesController.update);

router.delete('/:id', enterprisesController.destroy);

module.exports = router;
