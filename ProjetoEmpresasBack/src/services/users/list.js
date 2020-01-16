const { usersRepository } = require('../../repositories');
const { errorHandler: ApplicationError } = require('../../helpers');

module.exports = {
  list: async () => {
    try {
      const users = await usersRepository.list();

      if (!users) {
        throw new ApplicationError('Usuário não encontrado', 404);
      }

      return users;
    } catch (e) {
      throw e;
    }
  },
};
