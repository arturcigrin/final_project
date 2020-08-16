'use strict';

const baseUrl = 'http://localhost:8888';
const apiAllRooms = '/api/rooms';

const roomContainer = document.querySelector('#rooms');

module.exports = { roomContainer, baseUrl, apiAllRooms };
