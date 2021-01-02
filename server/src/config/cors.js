module.exports = {
  origin: process.env.CLIENT_URL,
  methods: ["GET", "PUT", "POST", "PATCH", "DELETE"],
  credentials: true,
  optionsSuccessStatus: 200,
};
