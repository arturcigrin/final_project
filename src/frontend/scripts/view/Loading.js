'use stirct';
const loadingEl = document.querySelector('#loading');

export default class Loading {
  loading = () => {
    document.body.className = 'overflow-hidden';
    document.body.insertAdjacentHTML('afterbegin', '<div id="loading"></div>');
  };

  loadingEnd = () => {
    loadingEl.remove();
    document.body.className = '';
  };
}
