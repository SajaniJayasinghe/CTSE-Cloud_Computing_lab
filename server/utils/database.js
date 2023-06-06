const mongoose = require("mongoose");

const connection = async () => {
  const mongo_uri =
    "xxxxxxxxxxx";

  try {
    await mongoose.connect(mongo_uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Database connected");
  } catch (err) {
    console.log(err);
  }
};

module.exports = connection;
