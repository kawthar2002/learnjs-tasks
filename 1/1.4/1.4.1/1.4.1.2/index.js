let schedule = {};
isEmpty = (schedule) => {
  for (let key in schedule) {
    return false;
  }
  return true;
};
