const { enterprisesRepository } = require('../../repositories');
const { errorHandler: ApplicationError } = require('../../helpers');

module.exports = {
  async destroy(id) {
    try {
      const enterprise = await enterprisesRepository.getById(id);

      if (!enterprise) {
        throw new ApplicationError('Empresa não encontrada', 404);
      }

      return enterprisesRepository.destroy(id);
    } catch (e) {
      throw e;
    }
  },
};
