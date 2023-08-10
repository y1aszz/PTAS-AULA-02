const express = require('express');
const routes = express.Router();
const userController = require('../controller/userController');

  routes.get ('/user', userController.findUser);
  routes.post ('/user', userController.createUser);
  routes.post ('./user/authenticated', userController.authenticatedUser);

  module.exports = routes;