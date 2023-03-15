const scroll = () => {
    while(true) {
      let windowBottom = document.documentElement.getBoundingClientRect().bottom;
      if (windowBottom > document.documentElement.clientHeight + 100) break;
      document.body.insertAdjacentHTML("beforeend", `<p>Date: ${new Date()}</p>`);
    }
  }

  window.addEventListener('scroll', scroll);

  scroll();