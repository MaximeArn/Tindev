module.exports = {
  authorizationHandler: ({ decoded }, res) => {
    if (decoded) {
      const { id, ...credentials } = decoded;
      return res.status(200).json(credentials);
    }
  },
};
