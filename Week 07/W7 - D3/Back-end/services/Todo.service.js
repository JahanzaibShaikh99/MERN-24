const TodoModel = require("../models/Todo.model");
// export 1. way 1 :: adding export with functions
const createTodo = async (text, password) => {
  return await TodoModel.create({ text, password });
};
const getTodo = async () => {
  return await TodoModel.find();
};

module.exports = {
  createTodo,
  getTodo,
};
