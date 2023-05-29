const express = require("express");
const connection = require("./utils/database");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

//import routes
const TodoRouter = require("./routes/todo.routes");

//use routes
app.use("/api/v1/todos", TodoRouter);

app.use("/", (req, res) => {
  res.send("Welcome to the Todo API");
});

const start = async () => {
  try {
    await connection();
    app.listen(8080, () => {
      console.log("Server is up and running");
    });
  } catch (err) {
    console.log(err);
  }
};

start();
