let calculator = {
  read() {
    this.firstNum = +prompt('Enter your first number', 0);
    this.secondNum = +prompt('Enter your second number', 0);
  },

  sum() {
    return this.firstNum + this.secondNum;
  },

  mul() {
    return this.firstNum * this.secondNum;
  },
};
calculator.read();
alert(calculator.sum());
alert(calculator.mul());
