tree.addEventListener('click', (event) => {
  if (event.target.tagName != 'SPAN') {
    return;
  }
  let list = event.target.parentNode.querySelector('ul');
  if (!list) return;

  list.hidden = !list.hidden;
});
