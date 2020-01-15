const { list } = require('./list');
const { getById } = require('./get');
const { update } = require('./update');
const { destroy } = require('./delete');
const { create } = require('./create');

module.exports = {
  list,
  getById,
  update,
  destroy,
  create,
};
