const { usersService } = require('../services');

module.exports = {
  async index(req, res) {
    try {
      const users = await usersService.list();
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
      const { name, email, password } = req.body;
      const response = await usersService.create({ name, email, password });
      res.status(201).json(response);
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
      const { name, email, password } = req.body;
      const user = await usersService.create({
        name,
        email,
        password,
      });
      return res.json(user).status(201).send(user);
    } catch (e) {
      return res.status(400).send({ error: e });
    }
  },
};
