const { usersRepository } = require('../../repositories');
const { erroHandler: ApplicationError } = require('../../helpers');

module.exports = {
    getBy: async (param) => {
        try {
            const user = await usersRepository.get(param);

            if (!user) {
                throw new ApplicationError('Usuário não encontrado', 404);
            }

            return true;
        } catch (e) {
            console.log(e);
            throw e;
        }
    },
};
