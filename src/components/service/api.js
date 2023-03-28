import axios from 'axios';

async function searchImage(value, page = 1) {
  const BASE_URL = 'https://pixabay.com/api/';
  const KEY = '30810402-d2272724878c47174b870ed5b';

  try {
    const responce = await axios.get(
      `${BASE_URL}?q=${value}&page=${page}&key=${KEY}&image_type=photo&orientation=horizontal&per_page=12`
    );
    return responce.data;
  } catch (error) {
    console.log('error', error);
  }
}

export default searchImage;
