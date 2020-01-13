const { enterprisesRepository } = require('../../repositories');
const {
  errorHandler: ApplicationError,
} = require('../../helpers');

module.exports = {
  list: async () => {
    try {
      const enterprises = await enterprisesRepository.list();

      if (!enterprises) {
        throw new ApplicationError('Usuário não encontrado', 404);
      }

      return enterprises;
    } catch (e) {
      throw e;
    }
  },
};
