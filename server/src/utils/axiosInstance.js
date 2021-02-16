const axios = require("axios");

return axios.create({
  withCredentials: false,
  headers: { "Content-Type": "application/x-www-form-urlencoded" },
});
