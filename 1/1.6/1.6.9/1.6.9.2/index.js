function delay(f, ms) {
  return function (...args) {
    let newThis = this;
    setTimeout(function () {
      f.apply(newThis, args);
    }, ms);
  };
}
