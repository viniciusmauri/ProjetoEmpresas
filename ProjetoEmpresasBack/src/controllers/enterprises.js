const { enterprisesService } = require('../services');

module.exports = {
  async create(req, res) {
    try {
      const {
        name, description, contry, type,
      } = req.body;
      const enterprise = await enterprisesService.create({
        name,
        description,
        contry,
        type,
      });
      return res.json(enterprise).status(201).send(enterprise);
    } catch (e) {
      return res.status(400).send({ error: e });
    }
  },

  async index(req, res) {
    const {
      name, enterpriseTypes,
    } = req.query;

    try {
      const { page, pageSize } = req.query;
      const enterprises = await enterprisesService.list({
        name,
        enterpriseTypes,
        page,
        pageSize,
      });
      return res.status(200).json(enterprises);
    } catch (e) {
      console.error(e);
      return res.status(e.status || 500).json({
        name: e.name,
        message: e.message,
      });
    }
  },

  async getById(req, res) {
    const { id } = req.params;

    try {
      const enterprise = await enterprisesService.getById(id);
      res.status(200).json(enterprise);
    } catch (e) {
      console.error(e);
      res.status(e.status || 500).json({
        name: e.name,
        message: e.message,
      });
    }
  },

  async destroy(req, res) {
    const { id } = req.params;

    try {
      await enterprisesService.destroy(id);
      res.status(200).end();
    } catch (e) {
      console.error(e);
      res.status(e.status || 500).json({
        name: e.name,
        message: e.message,
      });
    }
  },

  async update(req, res) {
    try {
      const {
        body,
        params: { id },
      } = req;

      const enterprise = await enterprisesService.update(id, {
        ...body,
      });
      res.status(200).json(enterprise);
    } catch (e) {
      console.error(e);
      res.status(e.status || 500).json({
        name: e.name,
        message: e.message,
      });
    }
  },

};
