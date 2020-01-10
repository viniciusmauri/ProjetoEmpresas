const express = require('express');
const authMid = require('../middlewares/auth');

const router = express.Router();

router.use(authMid);

router.get('/', (req, res) => {
    res.send({ ok: true });
});

module.exports = app => app.use('/sign_in', router);