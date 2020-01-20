const authenticate = require('../services/auth');

module.exports = {
  signin: async (req, res) => {
    try {
      const { email, password } = req.body;
      const auth = await authenticate(email, password);
      console.log(auth);
      req.status(200).json({
        auth,
      });
    } catch (e) {
      console.error(e);
      res.status(e.status || 500).json({
        name: e.name,
        message: e.message,
      });
    }
  },
};
