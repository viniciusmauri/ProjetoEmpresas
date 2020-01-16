const router = require('express').Router();
const bcrypt = require('bcryptjs');
const { usersController } = require('../controllers');
const authenticate = require('../services/auth');

router.get('/', usersController.index);

router.post('/auth/signin', usersController.authenticate);

//router.post('/auth/signin', async (req, res) => {
//const { email, password } = req.body;
//  if (!email || !password) { return res.status(400).send({ error: 'Dados inválidos ou insuficientes' }); }
//  try {
//    const user = await usersController.authenticate({ email }).select('+password');
//    if (!user) { return res.status(400).send({ error: 'Usuário não cadastrado' }); }
//    const passOk = await bcrypt.compare(password, user.password);
//    if (!passOk) { return res.status(401).send({ error: 'Erro ao autenticar o usuário!' }); }
//    user.password = undefined;
//    return res.send({ user, token: authenticate.token(user.id) });
//  } catch (e) {
//    return res.status(500).send({ error: 'Erro ao buscar usuário!' });
//  }
//});

module.exports = router;
