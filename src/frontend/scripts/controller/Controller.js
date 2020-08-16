'use strict';
import ModelRooms from '../model/ModelRooms';

export default class Controller {
  constructor() {
    this.modelRooms = new ModelRooms();
    // this.listRoom = this.modelRooms.getAllRoom();
    console.log(this.modelRooms.getListRoom());
  }
}
