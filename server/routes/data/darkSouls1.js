const express = require('express');
const fs = require('fs');

const darkSouls1DataRouter = express.Router();

darkSouls1DataRouter.get('/starting-classes', (request, response) => {
  fs.readFile('data/dark-souls-1/starting-classes.json', 'utf-8', (error, data) => {
    const parsedData = JSON.parse(data);
    return response.json(parsedData);
  });
});

module.exports = darkSouls1DataRouter;
