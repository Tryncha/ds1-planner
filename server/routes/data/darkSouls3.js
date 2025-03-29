const express = require('express');
const fs = require('fs');

const darkSouls3DataRouter = express.Router();

darkSouls3DataRouter.get('/starting-classes', (request, response) => {
  fs.readFile('data/dark-souls-3/starting-classes.json', 'utf-8', (error, data) => {
    const parsedData = JSON.parse(data);
    return response.json(parsedData);
  });
});

module.exports = darkSouls3DataRouter;
