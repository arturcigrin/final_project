'use strict';
export default class AllRooms {}

fetch('http://localhost:8888/api/rooms')
  .then((res) => res.json())
  .then((rooms) => {
    const templateRoomCard = new Template().templateRoomCard();

    const templateRooms = rooms
      .map(({ nameRoom, roomCounter, id }) => {
        return templateRoomCard
          .replace(new RegExp('{{nameRoom}}', 'g'), nameRoom)
          .replace('{{id}}', id)
          .replace('{{roomCounter}}', roomCounter);
      })
      .join('\n');

    document.querySelector('#rooms').insertAdjacentHTML('beforeend', templateRooms);
  })
  .finally(() => new Loading().loadingEnd());
