const { promisify } = require('util');
const jwt = require('../helpers/jwt');
const { usersService } = require('../services');
const { errorHandler: AppplicationError } = require('../helpers');


const verify = promisify(jwt.verify);

module.exports = async (req, res, next) => {
  let token;
  try {
    if (req.headers && req.headers.authorization) {
      const parts = req.headers.authorization.split(' ');

      if (parts.length === 2) {
        const scheme = parts[0];
        const credentials = parts[1];

        if (/^Bearer$/i.test(scheme)) {
          token = credentials;
        } else {
          throw new AppplicationError('wrong-authorization-format', 403);
        }
      }
    } else {
      throw new AppplicationError('wrong-authorization-format', 403);
    }

    const decoded = await verify(token);
    const user = await usersService.get(decoded.user.id);

    if (!user) {
      throw new AppplicationError('user-not-found', 404);
    }

    req.session = {
      token,
      user,
    };

    next();
  } catch (e) {
    const { status, name, message } = new AppplicationError(e);
    res.status(status).json({
      name,
      message,
    });
  }
};
