import './styles/main.scss';
import { setViewportSize } from './utils/viewport';

const body = document.querySelector(`.body`);
const header = document.querySelector(`.header`);
const footer = document.querySelector(`.footer`);
const articleList = document.querySelector(`.article-list`);
const buttonsOpen = document.querySelectorAll('nav ul li button');
const buttonsClose = document.querySelectorAll('.article-close');

const openArticle = (id) => {
  if (body.classList.contains('is-article-visible')) {
    return;
  }
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
  if (!body.classList.contains('is-article-visible')) {
    return;
  }
  const active = document.querySelector(`.article.active`);
  if (!active) {
    return;
  }
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

buttonsOpen.forEach((button) => {
  button.addEventListener('click', () => openArticle(button.dataset.id));
});

buttonsClose.forEach((button) => {
  button.addEventListener('click', () => sloseArticle());
});

const listener = (event) => {
  const active = document.querySelector(`.article.active`);
  if (active && !active.contains(event.target)) {
    sloseArticle();
  }
};

document.addEventListener('mousedown', listener);
document.addEventListener('touchstart', listener);

window.addEventListener('keydown', (event) => {
  if (event.code === 'Escape') {
    sloseArticle();
  }
});

setTimeout(() => {
  body.classList.remove('is-loading');
}, 100);

setViewportSize();
window.addEventListener('resize', setViewportSize);
