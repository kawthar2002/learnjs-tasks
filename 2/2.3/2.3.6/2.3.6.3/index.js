const isVisible = (elem) => {
  let coordinates = elem.getBoundingClientRect();
  let windowHeight = document.documentElement.clientHeight;
  let topVisible = coordinates.top > 0 && coordinates.top < windowHeight;
  let bottomVisible = coordinates.bottom < windowHeight && coordinates.bottom > 0;

  return topVisible || bottomVisible;
};
const showVisible = () => {
  for (let img of document.querySelectorAll('img')) {
    let realSrc = img.dataset.src;
    if (!realSrc) continue;

    if (isVisible(img)) {
      realSrc += '?nocache=' + Math.random();

      img.src = realSrc;

      img.dataset.src = '';
    }
  }
};

window.addEventListener('scroll', showVisible);
showVisible();
