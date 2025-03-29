const express = require('express');
const fs = require('fs');

const eldenRingDataRouter = express.Router();

eldenRingDataRouter.get('/starting-classes', (request, response) => {
  fs.readFile('data/elden-ring/starting-classes.json', 'utf-8', (error, data) => {
    const parsedData = JSON.parse(data);
    return response.json(parsedData);
  });
});

module.exports = eldenRingDataRouter;
