const slug = require('slug');

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
      newUser.password = encryptor.hashPassword(params.password);

      const user = await usersRepository.create(newUser);
      const surveyUrl = slug(`${newUser.name} ${user.id}`, { lower: true });
      await usersRepository.update(user.id, {
        surveyUrl,
      });

      return {
        ...user.toJSON(),
        surveyUrl,
      };
    } catch (error) {
      console.error(error);
      throw error;
    }
  },
};
