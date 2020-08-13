'use strict';
const express = require('express');
const roomRouter = express.Router();
const fs = require('fs');
const path = require('path');

roomRouter.get('/:roomName', (req, res) => {
  fs.readFile(path.join(__dirname, '../db', 'tradingPlatform.json'), 'utf-8', (err, data) => {
    if (err) throw new Error(err);
    const room = JSON.parse(data)['rooms'].find(({ nameRoom }) => nameRoom.toLowerCase() === req.params.roomName);

    room ? res.json(room) : res.send('Такой комнаты нет');
  });
});

module.exports = roomRouter;
