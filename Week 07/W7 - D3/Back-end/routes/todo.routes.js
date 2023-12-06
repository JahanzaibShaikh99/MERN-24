const express = require("express");
const router = express.Router();
const { GetTodo, createTodo } = require("../controllers/Todo.controller");
router.get("/", GetTodo);

router.post("/", createTodo);

module.exports = router;
