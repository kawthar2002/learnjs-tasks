const printNumbers = (from, to) => {
  let currentFrom = from;
  const timerId = setInterval(function () {
    alert(currentFrom);
    if (currentFrom == to) {
      clearInterval(timerId);
    }
    currentFrom++;
  }, 1000);
};
printNumbers(1, 9);
