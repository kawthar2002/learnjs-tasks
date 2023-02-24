const getDateAgo = (date, ago) => {
  date.setDate(date.getDate() - ago);
  return date.getDate();
};
let date = new Date(2015, 0, 2);

alert(getDateAgo(date, 1));
alert(getDateAgo(date, 2));
alert(getDateAgo(date, 365));
