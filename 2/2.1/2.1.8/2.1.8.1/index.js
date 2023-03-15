const showNotification = ({ top = 0, right = 0, html, className }) => {
  const notification = document.createElement('div');
  document.body.append(notification);
  notification.className = className;
  notification.innerHTML = html;
  notification.style.top = top + 'px';
  notification.style.right = right + 'px';
  document.body.append(notification);
  setTimeout(() => notification.remove(), 1500);
};

setInterval(() => {
  showNotification({
    top: 30,
    right: 30,
    html: 'Hello!',
    className: 'notification',
  });
}, 2000);
