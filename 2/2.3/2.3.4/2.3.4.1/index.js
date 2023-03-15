const runOnKeys = (func, ...codes) => {
  let keys = new Set();

  document.addEventListener('keydown', function (event) {
    keys.add(event.code);

    for (let code of codes) {
      if (!keys.has(code)) {
        return;
      }
    }
    keys.clear();

    func();
  });

  document.addEventListener('keyup', (event) => {
    keys.delete(event.code);
  });
};

runOnKeys(() => alert('Привет!'), 'KeyQ', 'KeyW');
