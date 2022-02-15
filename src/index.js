import './css/normalize.css';
import './css/styles.scss';
import './babel';
import './js/form';
import SliderElement from './js/slider';

// Slider Initialization
const Carousel = new SliderElement();
const control = document.querySelector('.banner__control');
control.addEventListener('click', () => {
  Carousel.slide();
});
// Preload slides
function preloadImage() {
  Carousel.slides.images.forEach((url) => {
    const img = new Image(url);
    img.src = url;
  });
}
preloadImage();
// Smooth scrolling
const banner = document.querySelector('.header__wrapper');
banner.addEventListener('mousewheel', (e) => {
  e.preventDefault();
  if (e.deltaY > 0) {
    window.scroll({
      top: window.innerHeight,
      behavior: 'smooth',
    });
  }
});
function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
    -rect.top <= rect.height
  );
}
const main = document.querySelector('.main');
main.addEventListener('mousewheel', (e) => {
  if (isInViewport(banner) && (e.deltaY < 0)) {
    window.scroll({
      top: 0,
      behavior: 'smooth',
    });
  }
});
const btn = document.querySelector('.banner__btn');
btn.addEventListener('click', () => {
  const wrapper = document.createElement('div');
  wrapper.classList.add('wrapper');
  const body = document.querySelector('body');
  body.appendChild(wrapper);
  const form = document.querySelector('.form');
  form.style.display = 'flex';
  form.style.opacity = '1';
  body.style.overflowY = 'hidden';
  wrapper.addEventListener('click', () => {
    wrapper.remove();
    form.style.display = 'none';
    form.style.opacity = '0';
    body.style.overflowY = 'scroll';
  });
});
