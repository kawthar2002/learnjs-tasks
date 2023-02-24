const user = {
  name: 'John',
  age: 30,
};

const count = (obj) => {
  return Object.keys(obj).length;
};
alert(count(user));
