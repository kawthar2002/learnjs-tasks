const readNumber = () => {
  let number = prompt('Enter your number', 0);

  if (isFinite(number)) return +number;

  if (number === '' || number === null) return null;

  if (!isFinite(number)) return readNumber();
};

alert(`Your number is ${readNumber()}`);
