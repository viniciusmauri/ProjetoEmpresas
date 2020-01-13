const { enterprisesRepository } = require('../../repositories');
const {
  errorHandler: ApplicationError,
} = require('../../helpers');

module.exports = {
  filter: async () => {
    try {
      const enterprises = await enterprisesRepository.filter({
        attibutes: ['name', 'type'],
      });

      if (!enterprises) {
        throw new ApplicationError('Empresa não encontrada', 404);
      }

      return enterprises;
    } catch (e) {
      throw e;
    }
  },
};
