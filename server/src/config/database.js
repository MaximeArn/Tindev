const { connect, connection } = require("mongoose");
connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true,
}).catch((error) => console.error(error));

module.exports = connection;
