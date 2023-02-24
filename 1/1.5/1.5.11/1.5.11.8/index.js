const formatDate = (date) => {
  let ago = new Date() - date;
  if (ago < 1000) {
    return 'прямо сейчас';
  }
  let seconds = Math.floor(ago / 1000);
  if (seconds < 60) {
    return seconds + ' сек. назад';
  }
  let minutes = Math.floor(ago / 60000);
  if (minutes < 60) {
    return minutes + ' мин. назад';
  }

  let today = date;
  today = [
    '0' + today.getDate(),
    '0' + (today.getMonth() + 1),
    '' + today.getFullYear(),
    '0' + today.getHours(),
    '0' + today.getMinutes(),
  ].map((component) => component.slice(-2));
  return today.slice(0, 3).join('.') + ' ' + today.slice(3).join(':');
};

alert(formatDate(new Date(new Date() - 1)));
alert(formatDate(new Date(new Date() - 30 * 1000)));
alert(formatDate(new Date(new Date() - 5 * 60 * 1000)));
alert(formatDate(new Date(new Date() - 86400 * 1000)));
