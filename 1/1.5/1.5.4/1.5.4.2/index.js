let arr = ['Джаз', 'Блюз'];
arr.push('Рок-н-ролл');
arr[Math.floor((arr.length - 1) / 2)] = 'Классика';
alert(arr.shift());
arr.unshift('Рэп', 'Регги');
