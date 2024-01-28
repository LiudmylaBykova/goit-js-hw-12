import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api';
const API_KEY = '41834264-e3d0e5d80121a8a176d918e74';

async function getImages({ query, page = 1, per_page }) {
  const data = await axios.get('/', {
    params: {
      key: API_KEY,
      q: query,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
      per_page,
      page,
    },
  });
  return data.data;
}
export { getImages };
