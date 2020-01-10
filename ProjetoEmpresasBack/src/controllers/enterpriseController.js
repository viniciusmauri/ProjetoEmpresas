const express = require('express');
const bodyParser = require('body-parser');

const models = require('../models');

app.use(bodyParser.json());

app.post('/', async (req, res) => {
    try {
        const { name, description, contry, type } = req.body;
        const post = await Post.create({
            name,
            description,
            contry,
            type
        });

        return res.status(200).send(post);
    } catch(e) {
        return res.status(400).sent({ error: e});
    }
})

/*app.get('/enterprise', async (req, res) => {
    const get = await get.
}
});*/