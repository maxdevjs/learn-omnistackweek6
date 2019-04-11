const express = require('express');
const BoxController = require('./controllers/BoxController');

const routes = express.Router();

routes.get('/test', (req, res) => {
  return res.send("value from routes!!!");
});

routes.post('/boxes', BoxController.store);

module.exports = routes;