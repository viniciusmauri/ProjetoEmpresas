'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert('users', [{
      name: 'John Doe',
      email: 'johndoe@empresas.com',
      password: '1593572486',
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      name: 'Mauri Vinicius',
      email: 'maurimoura@ioasys.com.br',
      password: '210818',
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      name: 'Juselito Sem Noção',
      email: 'juselitosemnocao@ioasys.com.br',
      password: 'nocao0',
      created_at: new Date(),
      updated_at: new Date()
    }
    ], {});

  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('users', null, {});
  }
};
