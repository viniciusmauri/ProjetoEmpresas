const express = require('express');
const EnterpriseController = require('./controllers/EnterpriseController');
const UserController = require('./controllers/UserController');

const routes = express.Router();

//routes.get('/', (req, res) => );


routes.post('/enterprise', EnterpriseController.store);
routes.get('/enterprise', EnterpriseController.index);

routes.post('/user', UserController.store);
routes.get('/user', UserControoler.index);

module.exports = routes;