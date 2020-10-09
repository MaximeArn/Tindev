module.exports = {
  origin: process.env.CLIENT_URL,
  methods: ["GET", "PUT", "POST", "PATCH", "DELETE"],
  credentials: true,
  allowHeaders: ["Content-Type", "application/json"],
  optionsSuccessStatus: 200,
};
