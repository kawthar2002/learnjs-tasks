function positionAt(anchor, position, elem) {
  let coordinates = anchor.getBoundingClientRect();
  if (position === 'top') {
    elem.style.left = coordinates.left + "px";
    elem.style.top = coordinates.top  + "px";
  } else if (position === 'right') {
    elem.style.left = coordinates.left + anchor.offsetWidth + 'px';
    elem.style.top = coordinates.top + 'px';
  } else if (position === 'bottom') {
    elem.style.left = coordinates.left + 'px';
    elem.style.top = coordinates.top + anchor.offsetHeight + 'px';
  }
}

function showNote(anchor, position, html) {
  let note = document.createElement('div');
  note.className = 'note';
  note.innerHTML = html;
  document.body.append(note);

  positionAt(anchor, position, note);
}

let blockquote = document.querySelector('blockquote');

showNote(blockquote, 'top', 'note above');
showNote(blockquote, 'right', 'note at the right');
showNote(blockquote, 'bottom', 'note below');
