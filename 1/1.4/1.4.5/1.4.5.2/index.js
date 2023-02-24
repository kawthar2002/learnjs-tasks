class Calculator {
  constructor() {
    this.read = function () {
      this.firstNum = +prompt('Enter your first number', 0);
      this.secondNum = +prompt('Enter your second number', 0);
    };
    this.sum = function () {
      return this.firstNum + this.secondNum;
    };
    this.multiply = function () {
      return this.firstNum * this.secondNum;
    };
  }
}
let calculator = new Calculator()
calculator.read()
alert(calculator.sum())
alert(calculator.multiply())