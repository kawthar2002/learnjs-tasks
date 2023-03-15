contents.addEventListener('click', (event) => {
  let target = event.target.closest('a');

  if (target) {
    let answer = confirm(
      `Going to ${target.getAttribute('href')}?`
    );

    if (!answer) {
      event.preventDefault();
    }
  }
});
