const express = require('express');
const EnterpriseController = require('./controllers/EnterpriseController');
const UserController = require('./controllers/UserController');

const routes = express.Router();

routes.post('/enterprises', EnterpriseController.store);
routes.get('/enterprises', EnterpriseController.index);

routes.post('/users', UserController.store);
routes.get('/users', UserController.index);

module.exports = routes;