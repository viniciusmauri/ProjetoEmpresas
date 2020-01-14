const router = require('express').Router();
const { isAuthorized } = require('../middlewares');
const { enterprisesController } = require('../controllers');

const enterprises = [];

router.get('/', enterprisesController.index);
router.post('/', isAuthorized, enterprisesController.store);
router.get('/enterprises/:name:enterprise_types', (req, res) => {
  const enterpriseName = String(req.params.name);
  const getEnterprise = enterprises.find(enterprise => enterprise.name === enterpriseName);

  if (!getEnterprise) {
    res.status(500).send('Empresa não encontrada');
  } else {
    console.log(getEnterprise);
    res.json(getEnterprise);
  }
});

router.get('/enterprises/:id', (req, res) => {
  const enterpriseId = Number(req.params.id);
  const getEnterprise = enterprises.find(enterprise => enterprise.id === enterpriseId);

  if (!getEnterprise) {
    res.status(500).send('Empresa não encontrada');
  } else {
    res.json(getEnterprise);
  }
});


module.exports = router;
