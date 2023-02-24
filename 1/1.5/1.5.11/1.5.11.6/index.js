const getSecondsToday = () => {
    let today = new Date();
    return today.getHours() * 3600 + today.getMinutes() * 60 + today.getSeconds();
  }