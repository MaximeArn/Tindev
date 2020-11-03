module.exports = {
  origin: [process.env.CLIENT_URL, process.env.CLIENT_URL_BIS],
  methods: ["GET", "PUT", "POST", "PATCH", "DELETE"],
  credentials: true,
  optionsSuccessStatus: 200,
};
