const getWeekDay = (date) => {
  const weekDays = ['ВС', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ'];
  return weekDays[date.getDay()];
};

const date = new Date(2012, 0, 3);
alert(getWeekDay(date));
