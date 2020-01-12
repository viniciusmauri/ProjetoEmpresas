const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const authConfig = require('../config/auth');

const User = require('../models/UserModel');
const router = express.Router();

function generationToken(params = {}) {
    return jwt.sign(parmas, authConfig.secret, {
        expiresIn: 8600,
    });
}

router.post('/register', async(req, res) => {
    const { email } = req.body;

    try {
        if (await User.findOne({ email }))
            return res.status(400).send({ error: 'User already exists' });

        const user = await User.create(req.body);

        user.password = undefined;

        return res.send({
            user,
            token: generationToken({ id: user.id }),
        });
    } catch (err) {
        return res.status(400).send({ error: 'Registration failed' });
    }
});

router.post('/authenticate', async(req, res) => {
    const { emal, password } = req.body;
    const user = await User.findOne({ email }).select('+password');

    if (!user)
        return res.status(400).send({ error: 'User not found' });


    if (!await bcrypt.compare(password, user.password))
        return res.status(400).send({ error: 'Invalid password' });

    user.password = undefined;

    res.send({
        user,
        token: generationToken({ id: user.id })
    });
});

module.exports = app => app.use('/auth', router);