import './css/styles.css';
import refs from './js/refs';
import { getImages } from './js/get_images';
// import simpleLightbox from 'simplelightbox';

let currentPage = 1;

refs.search.addEventListener('submit', onSearch);
refs.loadmore.addEventListener('click', onLoad);

function onSearch(event) {
  event.preventDefault();
  refs.card.innerHTML = '';
  if (!refs.search.elements.searchQuery.value) {
    return;
  }
  getImages(refs.search.elements.searchQuery.value);
}

function onLoad() {
  currentPage += 1;
  getImages(refs.search.elements.searchQuery.value, currentPage);
}

// Ініціалізація бібліотеки SimpleLightbox
// const slideOriginalImg = new SimpleLightbox('.gallery a', {
//   captionsData: 'alt',
//   captionDelay: 250,
// });

// *********************************

// import './css/styles.css';
// import { getImages } from './js/fetch-img';
// import { createMarkup } from './js/markup';
// import refs from './js/refs';
// import Notiflix from 'notiflix';

// Notiflix.Notify.init({
//   width: '280px',
//   position: 'center-top',
//   opacity: 1,
//   timeout: 1500,
// });

// refs.search.addEventListener('submit', onSearch);
// refs.loadmore.addEventListener('click', onLoadmore);

// // let page = 1;

// async function onSearch(event) {
//   event.preventDefault();
//   refs.card.innerHTML = '';
//   const images = await getImages(refs.search.elements.searchQuery.value);
//   const cards = await createMarkup(images.hits);
//   if (!images.hits.length || !refs.search.elements.searchQuery.value) {
//     Notiflix.Notify.failure(
//       'Sorry, there are no images matching your search query. Please try again.'
//     );
//     return;
//   }
//   return (refs.card.innerHTML = cards);
// }

// // async function onLoadmore(page) {
// //   page += 1;
// //   const images = await getImages(refs.search.elements.searchQuery.value);
// //   const cards = await createMarkup(images.hits);
// //   return (refs.card.innerHTML = cards);
// // }
