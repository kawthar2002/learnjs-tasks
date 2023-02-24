const getSecondsToTomorrow = () => {
  let now = new Date();
  let tomorrow = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1);
  let left = tomorrow - now;
  return Math.round(left / 1000);
};
