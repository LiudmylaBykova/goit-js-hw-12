import { refs } from './services/refs.js';
import { simplyGallery } from './services/simplylightbox.js';
import { getImages } from './services/api.js';
import { createMessage } from './services/massages-function.js';
import { scrollImg } from './services/scrollImg-function.js';
import { hideLoader, showLoader } from './services/loader-functions.js';
import {
  showLoadMoreBtn,
  hideLoadMoreBtn,
} from './services/loadMoreBtn-functions.js';
import { createMarkup } from './services/createMarkup-function.js';

const queryParams = {
  page: 1,
  query: '',
  maxPage: 0,
  per_page: 40,
};

refs.form.addEventListener('submit', onSearch);
async function onSearch(event) {
  event.preventDefault();
  refs.gallery.innerHTML = '';
  queryParams.page = 1;
  queryParams.query = refs.form.query.value.trim();
  if (!queryParams.query) {
    createMessage(
      `The search field can't be empty! Please, enter your request!`
    );
    hideLoadMoreBtn();
    return;
  }
  try {
    showLoader();
    const { hits, totalHits } = await getImages(queryParams);
    queryParams.maxPage = Math.ceil(totalHits / queryParams.per_page);
    createMarkup(hits, refs.gallery);
    simplyGallery.refresh();
    if (hits.length > 0) {
      showLoadMoreBtn();
      refs.loadMoreBtn.addEventListener('click', onLoadMore);
    } else {
      hideLoadMoreBtn();
      createMessage(
        `Sorry, there are no images matching your search query. Please, try again!`
      );
    }
    hideLoader();
  } catch (error) {
    console.log(error);
  } finally {
    refs.form.reset();
    if (queryParams.page === queryParams.maxPage) {
      hideLoadMoreBtn();
      createMessage(
        "We're sorry, but you've reached the end of search results!"
      );
    }
  }
}

async function onLoadMore() {
  queryParams.page += 1;
  try {
    showLoader();
    hideLoadMoreBtn();
    const { hits } = await getImages(queryParams);
    createMarkup(hits, refs.gallery);
    simplyGallery.refresh();
    hideLoader();
    scrollImg();
    showLoadMoreBtn();
  } catch (error) {
    console.log(error);
  } finally {
    if (queryParams.page === queryParams.maxPage) {
      hideLoadMoreBtn();
      createMessage(
        "We're sorry, but you've reached the end of search results!"
      );
    }
  }
}
