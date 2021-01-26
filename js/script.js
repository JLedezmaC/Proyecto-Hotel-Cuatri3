const enlaces = document.querySelectorAll('.tabs-tablist-item');
const content = document.querySelectorAll('.tabs-content-item');

function updateVisibleContent(id) {
  for (let i = 0; i < content.length; i++) {
    content[i].classList.add('js-content-hidden');
    if (content[i].getAttribute('id') === id) {
      content[i].classList.remove('js-content-hidden');
    }
  }
  for (let i = 0; i < enlaces.length; i++) {
    enlaces[i].classList.remove('js-active');
    if (enlaces[i].getAttribute('href').substring(1) === id) {
      enlaces[i].classList.add('js-active');
    }
  }
}

function clickHandler(event) {
  event.preventDefault();
  const id = event.currentTarget.getAttribute('href').substring(1);
  updateVisibleContent(id);
}

for (let i = 0; i < enlaces.length; i++) {
  enlaces[i].addEventListener('click', clickHandler);
}
updateVisibleContent(enlaces[0].getAttribute('href').substring(1));

// GALERIA//
const links = document.querySelectorAll('.miniature');
const bigImage = document.getElementById('bigImage');

for (let i = 0; i < links.length; i++) {
  links[i].addEventListener('click', (event) => {
    event.preventDefault();
    const url = event.currentTarget.getAttribute('src');
    bigImage.src = `${url}`;
    for (let j = 0; j < links.length; j++) {
      links[j].classList.add('img-content-hidden');
      if (links[j].getAttribute('src') === url) {
        links[j].classList.remove('img-content-hidden');
      }
    }
    for (let k = 0; k < bigImage.length; k++) {
      bigImage[k].classList.remove('img-active');
    }
    event.currentTarget.classList.add('img-active');
  });
}
