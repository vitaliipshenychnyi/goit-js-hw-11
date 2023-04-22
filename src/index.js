// import SimpleLightbox from 'simplelightbox';
// import 'simplelightbox/dist/simple-lightbox.min.css';

import './css/styles.css';
import refs from './js/refs';
import { getImages } from './js/get_images';

let currentPage = 1;

// Ініціалізація бібліотеки SimpleLightbox
// const gallery = new SimpleLightbox('.gallery a');

refs.search.addEventListener('submit', onSearch);
refs.loadmore.addEventListener('click', onLoad);

function onSearch(event) {
  event.preventDefault();
  refs.card.innerHTML = '';
  refs.loadmore.hidden = true;
  if (!refs.search.elements.searchQuery.value) {
    return;
  }
  getImages(refs.search.elements.searchQuery.value);
  // gallery.refresh();
}

function onLoad() {
  currentPage += 1;
  getImages(refs.search.elements.searchQuery.value, currentPage);
  // gallery.refresh();
}
