const pow = (x, n) => {
  x = prompt('Введите первое число', 1);
  n = prompt('Введите второе число', 1);
  if (n % 1 !== 0) {
    alert('Введите натуральное число');
  }
  return x ** n;
};
alert(pow())
