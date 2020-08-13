'use strict';
const express = require('express');
const fs = require('fs');
const path = require('path');
const allRoomRouter = require('./routes/allRooms');
const roomRouter = require('./routes/roomRouter');
// const exphbs = require('express-handlebars');
// const hbs = require('hbs');

const PORT = process.env.PORT || 8888;
const app = express();

app.use(express.static(path.resolve(__dirname, '../../dist/')));
app.use('/api/rooms', allRoomRouter);
app.use('/api/rooms', roomRouter);

app.listen(PORT, () => console.log('server working on port', PORT));
