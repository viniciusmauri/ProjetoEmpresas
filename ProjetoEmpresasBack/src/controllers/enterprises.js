const { enterprisesService } = require('../services');

module.exports = {
  async index(req, res) {
    try {
      const users = await enterprisesService.list();
      return res.status(200).json(users);
    } catch (e) {
      console.error(e);
      res.status(e.status || 500).json({
        name: e.name,
        message: e.message,
      });
    }
    return this.index;
  },

  create: async (req, res) => {
    try {
      const params = req.body;
      const response = await enterprisesService.create(params);
      res.status(200).json(response);
    } catch (e) {
      console.error(e);
      res.status(e.status || 500).json({
        name: e.name,
        message: e.message,
      });
    }
  },

  async store(req, res) {
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
};
