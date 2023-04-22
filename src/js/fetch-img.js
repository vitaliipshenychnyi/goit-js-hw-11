// const axios = require('axios').default;

// let page = 1;

// export async function getImages(name) {
//   const BASE_URL = 'https://pixabay.com/api/';
//   const API_KEY = '35659797-8cc42750c81fcd96097728ed9';
//   const params = new URLSearchParams({
//     key: API_KEY,
//     q: name,
//     image_type: 'photo',
//     orientation: 'horizontal',
//     safesearch: true,
//     per_page: 5,
//   });

//   try {
//     const response = await axios.get(`${BASE_URL}?${params}$page=${page}`);
//     return response.data;
//   } catch (error) {
//     console.error(error);
//   }

//   // const response = await fetch(`${BASE_URL}?${params}`);
//   // const images = await response.json();
//   // return images;
// }
