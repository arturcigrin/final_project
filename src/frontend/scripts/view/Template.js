export default class Template {
  templateMainPage() {
    return `
          <main class="main main-homepage">
            <div class="container">
             <div id="rooms" class="row">
             </div>
            </div>
        </main>
        `;
  }

  templateRoomCard() {
    return `
          <div class="col-12 col-md-6 col-lg-3 col-xl-4">
            <div class="card_categories" data-id={{id}}>
              <h3 class="card_categories__title"><a href="/{{nameRoom}}">{{nameRoom}}</a></h3>
              <span class="card_categories__room-counter">{{roomCounter}}</span>
            </div>
          </div>`;
  }
}
