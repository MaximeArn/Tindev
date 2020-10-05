const mongoose = require("mongoose");

mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
    autoIndex: true,
  })
  .catch((error) => console.log(new Error(error)));

mongoose.connection.on("error", (error) => console.error(error));
mongoose.connection.once("open", () => console.log("Db Connected"));
