const { User } = require('../models');

module.exports = {
  list(args) {
    return User.findAll(args);
  },

  getById(id) {
    return User.findByPk(id);
  },

  get(args) {
    return User.findOne({
      where: args,
    });
  },

  update(id, obj) {
    return User.update(obj, {
      where: { id },
    });
  },

  create(obj) {
    return User.create(obj);
  },

  delete(id) {
    return User.destroy({
      where: { id },
    });
  },
};
