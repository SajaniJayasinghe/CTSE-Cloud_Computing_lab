const mongoose = require("mongoose");

const connection = async () => {
  const mongo_uri =
    "mongodb+srv://mdb:mdb%40123@cluster0.xsfpasq.mongodb.net/CTSE_LAB?retryWrites=true&w=majority";

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
