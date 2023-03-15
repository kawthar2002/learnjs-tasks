const list = content.querySelector('ul');
const listItems = content.querySelectorAll('li');
const buttonLeft = content.querySelector('.arrow-left');
const buttonRight = content.querySelector('.arrow-right');
let position = 0;
let width = 130;
let count = 3;

buttonLeft.addEventListener('click', () => {
  position += width * count;
  position = Math.min(position, 0);
  list.style.marginLeft = position + 'px';
});
buttonRight.addEventListener('click', () => {
  position -= width * count;
  position = Math.max(position, -width * (listItems.length - count));
  list.style.marginLeft = position + 'px';
});
