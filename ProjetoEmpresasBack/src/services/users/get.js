const { enterprisesRepository: usersRepository } = require('../../repositories');
const { errorHandler: ApplicationError } = require('../../helpers');

module.exports = {
  async getById(id) {
    try {
      const user = await usersRepository.getById(id);

      if (!user) {
        throw new ApplicationError('Usuário não encontrado', 404);
      }

      return user;
    } catch (e) {
      throw e;
    }
  },

  async findOne(email) {
    try {
      const user = await usersRepository.findOne(email);

      if (!user) {
        throw new ApplicationError('E-mail não cadastrado', 401);
      }
      return user;
    } catch (e) {
      throw e;
    }
  },
};
