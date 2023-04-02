function pseudoRandom(seed) {
  let value = seed;

  return function () {
    value = (value * 16807) % 2147483647;
    return value;
  };
}

let generator = pseudoRandom(1);
alert(genererator());
