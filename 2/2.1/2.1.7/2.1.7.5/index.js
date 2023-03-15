const lis = document.getElementsByTagName('li');

for (let li of lis) {
  const liChildren = li.getElementsByTagName('li').length;
  if (!liChildren) continue;
  li.firstChild.textContent += '[' + liChildren + ']';
}
