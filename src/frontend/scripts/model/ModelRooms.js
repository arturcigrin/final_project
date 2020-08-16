'use strict';
import { baseUrl, apiAllRooms } from '../config';
import Loading from '../view/Loading';

const load = new Loading();

export default class ModelRooms {
  constructor() {}

  getListRoom() {
    let roomList = [];
    this.getAllRoom()
      .then((res) => (roomList = res.json()))

      .finally(load.loadingEnd);

    console.log(roomList);
  }

  getAllRoom() {
    return fetch(baseUrl + apiAllRooms);
    //   .then((res) => res.json())
    //   .then(this.setListRooms)
    //   .finally(load.loadingEnd);
  }
}
