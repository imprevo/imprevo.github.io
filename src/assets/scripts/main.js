const body = document.querySelector(`.body`);
const header = document.querySelector(`.header`);
const footer = document.querySelector(`.footer`);
const articleList = document.querySelector(`.article-list`);
const buttonsOpen = document.querySelectorAll('nav ul li button');
const buttonsClose = document.querySelectorAll('.article-close');

const openArticle = (id) => {
  const active = document.querySelector(`.article#${id}`);
  body.classList.add('is-article-visible');
  active.classList.add('active');
  setTimeout(() => {
    header.classList.add('timeout');
    footer.classList.add('timeout');
    articleList.classList.add('timeout');
  }, 325);
  setTimeout(() => {
    active.classList.add('timeout');
  }, 350);
};

const sloseArticle = () => {
  const active = document.querySelector(`.article.active`);
  active.classList.remove('timeout');
  setTimeout(() => {
    header.classList.remove('timeout');
    footer.classList.remove('timeout');
    articleList.classList.remove('timeout');
  }, 325);
  setTimeout(() => {
    body.classList.remove('is-article-visible');
    active.classList.remove('active');
  }, 350);
};

// TODO: click outside

buttonsOpen.forEach((button) => {
  button.addEventListener('click', () => openArticle(button.dataset.id));
});

buttonsClose.forEach((button) => {
  button.addEventListener('click', () => sloseArticle());
});

window.addEventListener('keydown', (event) => {
  if (event.code === 'Escape') {
    sloseArticle();
  }
});

setTimeout(() => {
  body.classList.remove('is-loading');
}, 100);

const setViewportSize = () => {
  const vh = window.innerHeight * 0.01;
  const vw = window.innerWidth * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
  document.documentElement.style.setProperty('--vw', `${vw}px`);
};

setViewportSize();
window.addEventListener('resize', setViewportSize);
