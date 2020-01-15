const { Op } = require('sequelize');
const { enterprisesRepository } = require('../../repositories');
const {
  errorHandler: ApplicationError,
} = require('../../helpers');
const { paginate } = require('../../helpers');

module.exports = {
  list: async ({
    name = null, enterpriseTypes = null, page, pageSize,
  }) => {
    try {
      const args = [];

      if (name) {
        args.push({
          [Op.or]: [
            {
              name: {
                [Op.iLike]: `%${name}%`,
              },
            },
          ],
        });
      }

      if (enterpriseTypes) {
        args.push({
          [Op.or]: [
            {
              enterpriseTypes: {
                [Op.eq]: `${enterpriseTypes}`,
              },
            },
          ],
        });
      }

      const enterprises = await enterprisesRepository.list(
        paginate(
          {
            where: { [Op.and]: args },
          },
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
