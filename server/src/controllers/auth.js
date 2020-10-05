const authRouter = {
  register: async (req, res) => {
    const { body } = req;
    console.log(body);
  },

  login: async (req, res) => {},
};

module.exports = authRouter;
