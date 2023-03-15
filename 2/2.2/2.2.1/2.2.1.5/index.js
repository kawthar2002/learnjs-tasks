const button = document.getElementById('title');
const content = document.getElementById('content');

button.addEventListener('click', () => {
  content.classList.toggle('open');
});
