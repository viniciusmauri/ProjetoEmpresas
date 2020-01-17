const { enterprisesRepository: usersRepository } = require('../../repositories');
const { errorHandler: ApplicationError } = require('../../helpers');

module.exports = {
  async get(id) {
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
};
