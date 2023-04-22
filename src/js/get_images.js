import refs from './refs';
import { createMarkup } from './markup';
import Notiflix from 'notiflix';

// Налаштування Notiflix
Notiflix.Notify.init({
  width: '280px',
  position: 'center-top',
  opacity: 1,
  timeout: 2000,
  distance: '40px',
});

// Ініціалізація axios
const axios = require('axios').default;

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '35659797-8cc42750c81fcd96097728ed9';

export async function getImages(name, page = 1) {
  const params = new URLSearchParams({
    key: API_KEY,
    q: name,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    per_page: 40,
  });

  const response = await axios.get(`${BASE_URL}?${params}&page=${page}`);
  const datas = response.data;
  refs.loadmore.hidden = false;

  // повідомлення про кількість знайдених зображень
  if (page === 1 && datas.totalHits !== 0) {
    Notiflix.Notify.info(`Hooray! We found ${datas.totalHits} images.`);
    refs.header.classList.add('opac');
  }

  // додавання карток на екран
  refs.card.insertAdjacentHTML('beforeend', createMarkup(datas.hits));

  // прибирання кнопки "Load more" по закінченю карток на сервері
  if (
    refs.card.childNodes.length + 1 > datas.totalHits &&
    datas.totalHits !== 0
  ) {
    refs.loadmore.hidden = true;
    refs.header.classList.remove('opac');
    Notiflix.Notify.warning(
      "We're sorry, but you've reached the end of search results."
    );
  }

  // перевірка за пошуком, який відсутній на сервері
  if (!datas.hits.length) {
    refs.loadmore.hidden = true;
    refs.header.classList.remove('opac');
    Notiflix.Notify.failure(
      'Sorry, there are no images matching your search query. Please try again.'
    );
    return;
  }
  // return;
}

// ===== Код через fetch, then, catch =====

// import refs from './refs';
// import { createMarkup } from './markup';
// import Notiflix from 'notiflix';

// Notiflix.Notify.init({
//   width: '280px',
//   position: 'center-top',
//   opacity: 1,
//   timeout: 2000,
// });

// const axios = require('axios').default;

// export function getImages(name, page = 1) {
//   const BASE_URL = 'https://pixabay.com/api/';
//   const API_KEY = '35659797-8cc42750c81fcd96097728ed9';
//   const params = new URLSearchParams({
//     key: API_KEY,
//     q: name,
//     image_type: 'photo',
//     orientation: 'horizontal',
//     safesearch: true,
//     per_page: 40,
//   });

//   return axios
//     .get(`${BASE_URL}?${params}&page=${page}`)
//     .then(response => {
//       const data = response.data;

//       // додавання повідомлення про кількість знайдених зображень
//       if (page === 1 && data.totalHits !== 0) {
//         Notiflix.Notify.info(`Hooray! We found ${data.totalHits} images.`);
//       }

//       // додавання карток на екран
//       refs.card.insertAdjacentHTML(
//         'beforeend',
//         createMarkup(response.data.hits)
//       );

//       // прибирання кнопки "Load more" по закінченю карток на сервері
//       refs.loadmore.hidden = false;
//       if (
//         refs.card.childNodes.length + 1 > data.totalHits &&
//         data.totalHits !== 0
//       ) {
//         refs.loadmore.hidden = true;
//         Notiflix.Notify.warning(
//           "We're sorry, but you've reached the end of search results."
//         );
//       }

//       // перевірка за пошуком, який відсутній на сервері
//       if (!data.hits.length) {
//         refs.loadmore.hidden = true;
//         Notiflix.Notify.failure(
//           'Sorry, there are no images matching your search query. Please try again.'
//         );
//         return;
//       }
//     })
//     .catch(error => {
//       console.log(error);
//     });
// }
