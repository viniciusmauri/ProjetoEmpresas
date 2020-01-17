const { enterprisesRepository } = require('../../repositories');

module.exports = {
  async create(obj) {
    try {
      const newEnterprise = {
        ...obj,
        enterpriseTypes: obj.enterpriseTypes.trim().toLowerCase(),
      };
      console.info(obj);
      return enterprisesRepository.create(newEnterprise);
    } catch (e) {
      console.log(e);
      throw e;
    }
  },
};
