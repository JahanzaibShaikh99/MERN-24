const { getTodo, createTodo } = require("../services/Todo.service");

exports.GetTodo = async (req, res, next) => {
  const todo = await getTodo();
  res.json(todo);
};

exports.createTodo = async (req, res, next) => {
  const { text, password } = req.body;
  const todo = await createTodo(text, password);
  todo.checkPassword(password, todo.password);
  res.json(todo);
};
