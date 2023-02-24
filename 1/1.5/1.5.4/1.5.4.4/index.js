const sumInput = () => {
  let arr = [];
  do {
    let number = prompt('Enter your number', 0);
    if (number === '' || number === null || !isFinite(number)) break;
    arr.push(parseInt(number));
  } while (true);
  let sum = 0;
  for (let item of arr) {
    sum += item;
  }
  return sum;
};
alert(sumInput());
