module.exports = {
  origin: "http://localhost:8080",
  methods: ["GET", "PUT", "POST", "PATCH", "DELETE"],
  credentials: true,
  allowHeaders: ["Content-Type", "application/json"],
  optionsSuccessStatus: 200,
};
