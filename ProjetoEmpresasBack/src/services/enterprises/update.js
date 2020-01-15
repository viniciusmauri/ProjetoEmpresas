const { enterprisesRepository } = require('../../repositories');
const { errorHandler: ApplicationError } = require('../../helpers');

module.exports = {
  async update(id, obj) {
    try {
      const enterprise = await enterprisesRepository.getById(id);

      if (!enterprise) {
        throw new ApplicationError('Empresa não encontrada', 404);
      }

      await enterprisesRepository.update(id, obj);
      return enterprisesRepository.getById(id);
    } catch (e) {
      throw e;
    }
  },
};
