const { usersRepository } = require('../../repositories');
const { errorHandler: ApplicationError, encryptor } = require('../../helpers');

module.exports = {
  authenticate: async (email, password) => {
    try {
      if (!email || !password) {
        throw new ApplicationError('Email ou Senha faltando', 403);
      }

      const user = await usersRepository.get({ email });
      if (!user) {
        throw new ApplicationError('Usuário não encontrado', 404);
      }

      if (!encryptor.comparePassword(password, user.password)) {
        throw new ApplicationError('Senha Inválida', 401);
      }

      const token = encryptor.generateToken({
        id: user.id,
        name: user.name,
        email: user.email,
      });

      return {
        user,
        token,
      };
    } catch (e) {
      throw e;
    }
  },
};
