const router = require('express').Router();
const { enterprisesController } = require('../controllers');

const enterprises = [];
//let findEnterprisesByNameAndType = function ({ name, type }, callback){
//  if(!enterprises[name, type]){
//    return callback(new Error(
//      'Empresa não encontrada' + ({name, type}) )
//    );
//  }
//}

router.get('/', enterprisesController.index);
router.post('/', enterprisesController.store);
router.get('/enterprises/:name', (req, res) => {
  const enterpriseName = String(req.params.name);
  const getEnterprise = enterprises.find(enterprise => enterprise.name === enterpriseName);

  if (!getEnterprise) {
    res.status(500).send('Empresa não encontrada');
  } else {
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
