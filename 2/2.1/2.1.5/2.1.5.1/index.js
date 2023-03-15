for (let li of document.querySelectorAll('li')) {
  let title = li.firstChild.data;
  title = title.trim();
  let lists = li.getElementsByTagName('li').length;

  alert(title + ': ' + lists);
}

