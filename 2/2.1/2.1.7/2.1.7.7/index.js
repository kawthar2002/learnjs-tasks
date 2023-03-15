const clock = document.getElementById('clock');
const hour = document.getElementById('hour');
const minute = document.getElementById('minute');
const second = document.getElementById('second');
let timerId;
console.log(hour);

const update = () => {
  let date = new Date();
  let hours = date.getHours();
  if (hours < 10) hours = `0${hours}`;
  hour.innerHTML = hours;
  let minutes = date.getMinutes();
  if (minutes < 10) minutes = `0${minutes}`;
  minute.innerHTML = minutes;
  let seconds = date.getSeconds();
  if (seconds < 10) seconds = `0${seconds}`;
  second.innerHTML = seconds;
};

const clockStart = () => {
  if (!timerId) {
    timerId = setInterval(update, 1000);
  }
  update();
};

const clockStop = () => {
  clearInterval(timerId);
  timerId = null;
};
