document.onclick = function (e) {
  coords.innerHTML = e.clientX + ':' + e.clientY;
};

const field = document.getElementById('field');
let coordinates = field.getBoundingClientRect();

let result1 = [coordinates.top, coordinates.left];
let result2 = [coordinates.right, coordinates.bottom];
let result3 = [
  coordinates.left + field.clientLeft,
  coordinates.top + field.clientTop,
];
let result4 = [
  coordinates.left + field.clientLeft + field.clientWidth,
  coordinates.top + field.clientTop + field.clientHeight,
];
alert(new Array(result1, result2, result3, result4).join('\n'));
