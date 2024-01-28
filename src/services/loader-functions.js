import { refs } from './refs.js';

function showLoader() {
  refs.loader.classList.remove('is-hidden');
}

function hideLoader() {
  refs.loader.classList.add('is-hidden');
}

export { showLoader, hideLoader };
