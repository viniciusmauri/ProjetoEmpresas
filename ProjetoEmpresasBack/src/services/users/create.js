const { usersRepository } = require('../../repositories');
const {
  encryptor,
  errorHandler: ApplicationError,
} = require('../../helpers');

module.exports = {
  create: async (params) => {
    try {
      const userExists = await usersRepository.get({ email: params.email });
      if (userExists) {
        throw new ApplicationError('Usuário já cadastrado', 409);
      }
      const newUser = params;
      console.info(params);
      newUser.password = encryptor.hashPassword(params.password);

      const user = await usersRepository.create(newUser);
      console.info(newUser);

      return {
        ...user.toJSON(),
      };
    } catch (e) {
      // console.error(e);
      throw e;
    }
  },
};
