arrowTop.onclick = () => {
    window.scrollTo(event.pageXOffset, 0);
  };

  window.addEventListener('scroll', () => {
    arrowTop.hidden = (event.pageYOffset < document.documentElement.clientHeight);
  });