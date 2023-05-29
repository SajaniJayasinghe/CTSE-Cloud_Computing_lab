const express = require("express");
const Todo = require("../models/todo.model");

const TodoRouter = express.Router();

//create todo
TodoRouter.route("/create").post(async (req, res) => {
  const { title, description, status } = req.body;

  if (title === "" || description === "" || status === "") {
    return res.status(400).json({ message: "Please enter all fields" });
  }

  const newTodo = new Todo({
    title,
    description,
    status,
  });
  try {
    await newTodo.save();
    res.status(200).json({ newTodo });
  } catch (err) {
    res.status(500).json({ err });
  }
});

//get all todos from db
TodoRouter.route("/allTodos").get(async (req, res) => {
  try {
    const todos = await Todo.find().sort({ createdAt: -1 });
    res.status(200).json({ todos });
  } catch (err) {
    res.status(500).json({ err });
  }
});

//http://localhost:8080/api/v1/todos/deleteTodo/6472740474f8f153a24a84e0
//delete todo from db
TodoRouter.route("/deleteTodo/:id").delete(async (req, res) => {
  const { id } = req.params;
  try {
    await Todo.findByIdAndDelete(id);
    res.status(200).json({ message: "Todo deleted successfully" });
  } catch (err) {
    res.status(500).json({ err });
  }
});
//http://localhost:8080/api/v1/todos/editTodo/6472740474f8f153a24a84e0
//edit todo in db
TodoRouter.route("/editTodo/:id").put(async (req, res) => {
  const { id } = req.params;
  const { title, description, status } = req.body;

  if (title === "" || description === "" || status === "") {
    return res.status(400).json({ message: "Please enter all fields" });
  }

  try {
    const updatedTodo = await Todo.findByIdAndUpdate(id, {
      title,
      description,
      status,
      time,
    });
    res.status(200).json({ updatedTodo });
  } catch (err) {
    res.status(500).json({ err });
  }
});

module.exports = TodoRouter;
