const { getAll, create, getOne, remove, update } = require('../controllers/todo.controllers');
const express = require('express');

const routerToDo = express.Router();

routerToDo.route('/')
  .get(getAll) //🔐👌
  .post(create);  //🔐👌

routerToDo.route('/:id')
  .get(getOne)  //🔐👌
  .delete(remove)  //🔐👌
  .put(update);  //🔐👌

module.exports = routerToDo;