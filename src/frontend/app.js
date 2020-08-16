import '@babel/polyfill';

import 'bootstrap/dist/css/bootstrap.min.css';
import './less/main.less';
import Controller from './scripts/controller/Controller';

new Controller();

async function data() {
  const res = await fetch('http://localhost:8888/api/rooms');

  console.log(res);
}

data();

document.querySelector('#mobileMenu').addEventListener('click', function (e) {
  document.querySelector('#nav').classList.toggle('active-menu');
  document.querySelector('.header').classList.toggle('active');
  this.classList.toggle('close');
});
