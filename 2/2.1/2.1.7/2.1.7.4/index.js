let data = {
  Рыбы: {
    форель: {},
    лосось: {},
  },

  Деревья: {
    Огромные: {
      секвойя: {},
      дуб: {},
    },
    Цветковые: {
      яблоня: {},
      магнолия: {},
    },
  },
};

const container = document.getElementById('container');
const createTree = (container, data) => {
  const ul = document.createElement('ul');

  for (let [key, value] of Object.entries(data)) {
    const li = document.createElement('li');
    li.textContent = key;
    container.append(ul);
    ul.append(li);
    createTree(li, value);
  }
};
createTree(container, data);
