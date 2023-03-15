const createCalendar = (elem, year, month) => {
  let monthOrdered = month - 1;
  let dateOrdered = new Date(year, monthOrdered);

  let table =
    '<table><tr><th>пн</th><th>вт</th><th>ср</th><th>чт</th><th>пт</th><th>сб</th><th>вс</th></tr><tr>';

  for (let i = 0; i < getDay(dateOrdered); i++) {
    table += '<td></td>';
  }
  while (dateOrdered.getMonth() == monthOrdered) {
    table += '<td>' + dateOrdered.getDate() + '</td>';

    if (getDay(dateOrdered) % 7 == 6) {
      table += '</tr><tr>';
    }
    dateOrdered.setDate(dateOrdered.getDate() + 1);
  }
  if (getDay(dateOrdered) != 0) {
    for (let i = getDay(dateOrdered); i < 7; i++) {
      table += '<td></td>';
    }
  }
  table += '</tr></table>';
  elem.innerHTML = table;
};

const getDay = (date) => {
  let day = date.getDay();
  if (day == 0) {
    day = 7;
  }
  return day - 1;
};

createCalendar(calendar, 2012, 9);
