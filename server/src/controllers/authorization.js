module.exports = {
  authorizationHandler: ({ decoded }, res) => {
    const { id, ...credentials } = decoded;
    return res.status(200).json(credentials);
  },
};
