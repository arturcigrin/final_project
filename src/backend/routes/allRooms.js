'use strict';
const express = require('express');
const allRoomRouter = express.Router();
const fs = require('fs');
const path = require('path');

allRoomRouter.get('/', (req, res) => {
  fs.readFile(path.join(__dirname, '../db', 'tradingPlatform.json'), 'utf-8', (err, data) => {
    if (err) throw new Error(err);

    const allRooms = JSON.parse(data).rooms;
    res.status(200);
    res.json(allRooms);
  });
});

module.exports = allRoomRouter;
