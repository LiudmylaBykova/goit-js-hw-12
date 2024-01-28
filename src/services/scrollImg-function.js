function scrollImg() {
  const rect = document.querySelector('.gallery-link').getBoundingClientRect();
  window.scrollBy({ top: rect.height * 2, left: 0, behavior: 'smooth' });
}

export { scrollImg };
