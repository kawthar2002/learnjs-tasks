const showTooltip = (event) => {
  let target = event.target;
  if (!target.dataset.tooltip) return;
  let divTooltip = document.createElement('div');
  divTooltip.innerHTML = target.dataset.tooltip;
  divTooltip.classList.add('tooltip');
  document.body.prepend(divTooltip);
  if (target.getBoundingClientRect().y > divTooltip.offsetHeight + 2) {
    divTooltip.style.top =
      target.getBoundingClientRect().y - divTooltip.offsetHeight - 2 + 'px';
  } else {
    divTooltip.style.top =
      target.getBoundingClientRect().y + target.offsetHeight + 3 + 'px';
  }
  divTooltip.style.left = target.getBoundingClientRect().x + 'px';
};

const hideTooltip = (event) => {
  let newTarget = event.relatedTarget;
  if (newTarget.closest('[data-tooltip]') && !newTarget.dataset.tooltip) return;
  document.querySelector('.tooltip').remove();
}

document.addEventListener('mouseover', showTooltip);
document.addEventListener('mouseout', hideTooltip);
