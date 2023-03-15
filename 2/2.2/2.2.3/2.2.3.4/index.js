const showTooltip = (event) => {
  if (event.target.dataset.tooltip && event.type == 'mouseover') {
    let divTooltip = document.createElement('div');
    divTooltip.className = 'tooltip';
    divTooltip.textContent = event.target.dataset.tooltip;
    document.body.prepend(divTooltip);
    divTooltip.style.left =
      parseInt(event.target.getBoundingClientRect().left) + 'px';
    divTooltip.style.top =
      parseInt(event.target.getBoundingClientRect().top) -
      parseInt(divTooltip.getBoundingClientRect().height) +
      'px';
    if (parseInt(divTooltip.style.top) < 0) {
      divTooltip.style.top = event.target.getBoundingClientRect().bottom + 'px';
    }
  }

  if (event.target.dataset.tooltip && event.type == 'mouseout') {
    document.querySelector('.tooltip').remove();
  }
};
document.addEventListener('mouseover', showTooltip);
document.addEventListener('mouseout', showTooltip);
