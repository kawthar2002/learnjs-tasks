const getLastDayOfMonth = (year, month) => {
  const date = new Date(year, month + 1);

  date.setDate(0);

  return date.getDate();
};
