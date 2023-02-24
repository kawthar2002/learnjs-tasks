const unique = (arr) => {
  return new Set(Array.from(arr));
};
const values = [
  'Hare',
  'Krishna',
  'Hare',
  'Krishna',
  'Krishna',
  'Krishna',
  'Hare',
  'Hare',
  ':-O',
];
alert(unique(values));
