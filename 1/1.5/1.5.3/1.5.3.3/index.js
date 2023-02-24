const truncate = (str, maxlength) => {
  if (str.length <= maxlength) {
    return str;
  } else {
    return str.substr(0, maxlength - 1) + '...'
  }
};
alert(truncate('Вот, что мне хотелось бы сказать на эту тему:', 20));
