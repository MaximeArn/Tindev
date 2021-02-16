const axios = require("axios");

module.exports = axios.create({
  withCredentials: false,
  headers: { "Content-Type": "application/x-www-form-urlencoded" },
});
