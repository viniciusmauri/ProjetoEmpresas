const express = require('express');

const Enterprise = require('../models/EnterpriseModel');

module.exports = {
    async index(req, res) {
        try {
            const enterprises = await Enterprise.findAll();
            return res.status(200).json(enterprises);
        } catch (e) {
            return res.status(400).send({ error: e });
        }
    },

    async store(req, res) {
        try {
            const { name, description, contry, type } = req.body;
            const enterprise = await Enterprise.create({
                name,
                description,
                contry,
                type
            });
            return res.json(enterprise).status(201).send(enterprise);
        } catch (e) {
            return res.status(400).send({ error: e });
        }
    }
};