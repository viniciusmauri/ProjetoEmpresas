const { Enterprise } = require('../models');

module.exports = {
  list(args) {
    return Enterprise.findAll(args);
  },

  getById(id) {
    return Enterprise.findByPk(id);
  },

  get(args) {
    return Enterprise.findOne({
      where: args,
    });
  },

  update(id, obj) {
    return Enterprise.update(obj, {
      where: { id },
    });
  },

  create(obj) {
    return Enterprise.create(obj);
  },

  destroy(id) {
    return Enterprise.destroy({
      where: { id },
    });
  },
};
