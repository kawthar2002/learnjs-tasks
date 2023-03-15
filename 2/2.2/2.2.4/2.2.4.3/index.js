thumbs.addEventListener('click', function (event) {
  let a = event.target.closest('a');

  if (!a || !thumbs.contains(a)) return;

  event.preventDefault();

  largeImg.src = a.href;
});
let event = new CustomEvent('click', { bubbles: true });
let images = document.getElementsByTagName('img')
setInterval(() => {
  let count = Math.ceil(Math.random() * images.length) + 1;
  let element = thumbs.querySelector(`a[href="https://en.js.cx/gallery/img${count}-lg.jpg"]`);
  element.dispatchEvent(event);
}, 2000);
