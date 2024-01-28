function createMarkup(hits, gallery) {
  const markup = hits
    .map(
      ({
        webformatURL,
        largeImageURL,
        tags,
        likes,
        views,
        comments,
        downloads,
      }) =>
        `
        <li class="gallery-item">
  <a class="gallery-link" href="${largeImageURL}">
    <img
      class="gallery-image"
      src="${webformatURL}"
      alt="${tags}"
    />
    <p class="gallery-descr">likes: <span class="descr-span">${likes}</span> views: <span class="descr-span">${views}</span> comments: <span class="descr-span">${comments}</span> downloads: <span class="descr-span">${downloads}</span></p>
  </a>
</li>`
    )
    .join('');
  gallery.insertAdjacentHTML('beforeend', markup);
}

export { createMarkup };
