const { usersService } = require('../services');

module.exports = {
  index: async (req, res) => {
    try {
      const users = await usersService.list();
      res.status(200).json(users);
    } catch (e) {
      console.info(e);
      res.status(e.status || 500).json({
        name: e.name,
        message: e.message,
      });
    }
  },

  create: async (req, res) => {
    const { email } = req.body;
    try {
      if (await usersService.findOne({ email })) {
        return res.status(400).json({ error: 'Usuário já cadastrado' });
      }

      const user = await usersService.create(req.body);

      return res.json({ user });
    } catch (e) {
      return res.status(400).json({ error: 'Falha ao cadastrar usuário' });
    }
  },

  authenticate: async (req, res) => {
    try {
      const { email, password } = req.body;

      const user = await usersService.findOne({ email });

      if (!user) {
        return res.status(400).json({ error: 'Usuário não encontrado' });
      }

      if (!(await user.compareHash(password))) {
        return res.statut(400).json({ error: 'Senha inválida' });
      }

      return res.json({
        user,
        token: user.generateToken(),
      });
    } catch (e) {
      return res.status(400).json({ error: 'Falha ao autenticar o usuário' });
    }
  },
};
