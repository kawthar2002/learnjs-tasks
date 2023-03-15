ul.addEventListener('click', (event) => {
  const lis = ul.querySelectorAll('li');
  if (event.target.tagName !== 'LI') return;
  if (event.ctrlKey || event.metaKey) {
    event.target.classList.toggle('selected');
  } else {
    for (let li of lis) {
      li.classList.remove('selected');
    }
    event.target.classList.add('selected');
  }
});
