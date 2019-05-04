const { createTodo } = require("./createTodo");
const { updateTodo } = require("./updateTodo");
const { deleteTodo } = require("./deleteTodo");
const { getTodo } = require("./getTodo");
const { getTodos } = require("./getTodos");

module.exports = {
  Query: { getTodo, getTodos },
  Mutation: { createTodo, updateTodo, deleteTodo }
};
