import 'bootstrap/dist/css/bootstrap.min.css';
import './less/main.less';

console.log('front');

document.querySelector('#mobileMenu').addEventListener('click', function (e) {
  document.querySelector('#nav').classList.toggle('active-menu');
  document.querySelector('.header').classList.toggle('active');
  this.classList.toggle('close');
});

fetch('http://localhost:8888/api/rooms')
  .then((res) => res.json())
  .then((rooms) => {
    const templateRoom = rooms
      .map(({ nameRoom, roomCounter, id }) => {
        return `
      <div class="col-12 col-md-6 col-lg-3 col-xl-4">
            <div class="card_categories" data-id=${id}>
              <h3 class="card_categories__title">${nameRoom}</h3>
              <span class="card_categories__room-counter">${roomCounter}</span>
            </div>
          </div>`;
      })
      .join('\n');

    document.querySelector('#rooms').insertAdjacentHTML('beforeend', templateRoom);
  });
