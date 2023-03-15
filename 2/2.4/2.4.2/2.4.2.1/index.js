view.addEventListener('click', () => {
  view.tabIndex = 0;
  view.focus();
  view.classList.add('edit');
  view.contentEditable = true;
});
view.addEventListener('blur', () => {
  view.classList.remove('edit');
});
view.onkeydown = (event) => {
  if (event.key == 'Enter') {
    view.blur();
  }
};
