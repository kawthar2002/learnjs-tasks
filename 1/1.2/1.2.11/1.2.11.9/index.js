let value = prompt('Кто там?', '');
if (value === 'Админ') {
  let newValue = prompt('Пароль?', '');
  if (newValue === 'Я главный') {
    alert('Здравствуйте!');
  } else if (value == false) {
    alert('Отменено');
  } else alert('Неверный пароль');
} else if (value == false) {
  alert('Отменено');
} else alert('Я вас не знаю');
