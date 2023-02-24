const copySorted = (arr) => {
  return arr.slice().sort();
};

let arr = ['HTML', 'JavaScript', 'CSS'];

let arrSorted = copySorted(arr);

alert(arrSorted);
alert(arr);
