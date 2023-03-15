const links = document.querySelectorAll('a');

links.forEach((a) => {
  let link = a.getAttribute('href');
  if (link === null) {
    return;
  } else if (link.includes('://') && !link.includes('http://internal.com')) {
    a.style.color = 'orange';
  }
});


