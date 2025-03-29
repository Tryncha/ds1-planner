const express = require('express');
const fs = require('fs');

const darkSouls2DataRouter = express.Router();

darkSouls2DataRouter.get('/starting-classes', (request, response) => {
  fs.readFile('data/dark-souls-2/starting-classes.json', 'utf-8', (error, data) => {
    const parsedData = JSON.parse(data);
    return response.json(parsedData);
  });
});

module.exports = darkSouls2DataRouter;
