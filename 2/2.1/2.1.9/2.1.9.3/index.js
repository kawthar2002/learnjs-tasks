const field = document.getElementById('field');
const ball = document.getElementById('ball');

ball.style.left =
  Math.round(field.clientWidth / 2 - ball.offsetWidth / 2) + 'px';
ball.style.top =
  Math.round(field.clientHeight / 2 - ball.offsetHeight / 2) + 'px';

field.style.left =
  Math.round(document.body.clientWidth / 2 - field.offsetWidth / 2) + 'px';
field.style.top =
  Math.round(window.screen.height / 2 + field.clientHeight / 2) + 'px';
