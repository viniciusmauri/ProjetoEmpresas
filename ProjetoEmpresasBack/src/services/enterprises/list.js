const { enterprisesRepository } = require('../../repositories');
const {
  errorHandler: ApplicationError,
} = require('../../helpers');
const { paginate } = require('../../helpers');

module.exports = {
  list: async ({ args = {}, page, pageSize }) => {
    try {
      const enterprises = await enterprisesRepository.list(
        paginate(
          { where: { ...args } },
          { page, pageSize },
        ),
      );

      if (!enterprises) {
        throw new ApplicationError('Empresa não encontrada', 404);
      }

      return enterprises;
    } catch (e) {
      throw e;
    }
  },
};
