const extractCurrencyValue = (str) => {
  return parseInt(str.slice(1));
};
alert(extractCurrencyValue('$120'));
