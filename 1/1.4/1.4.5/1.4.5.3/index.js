class Accumulator {
  constructor(startingValue) {
    this.value = startingValue;
    this.read = function () {
      this.value = startingValue + +prompt('Enter your number', 0);
    };
  }
}

let accumulator = new Accumulator(1);
accumulator.read();
alert(accumulator.value);
