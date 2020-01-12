const express = require('express');
const bodyParser = require('body-parser');

const User = require('../models/UserModel');

module.exports = {
    async index(req, res) {
        try {
            const users = await User.findAll();
            return res.status(200).json(users);
        } catch (e) {
            return res.status(400).send({ error: e });
        }
    },

    async store(req, res) {
        try {
            const { name, email, password } = req.body;
            const user = await User.create({
                name,
                email,
                contry,
                type
            });
            return res.json(user), res.status(201).send(user);
        } catch (e) {
            return res.status(400).send({ error: e });
        }
    }
};