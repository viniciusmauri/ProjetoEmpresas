const axios = require('axios');
const App = require('../models/App');

module.exports = {
    async index(req, res){
        const { user } = req.headers;
        const loogedUser = await App.findById(user);
        const users
    }
}