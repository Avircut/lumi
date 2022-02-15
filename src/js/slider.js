import ban1 from '../images/banner-1.webp';
import ban2 from '../images/banner-2.webp';
import ban3 from '../images/banner-3.webp';

const Banner = {
  images: [ban1, ban2, ban3],
  titles: ['Саунд Дизайн', 'Аранжировка', 'Аудиобрендинг'],
  desc: [
    `Наша команда поможет создать атмосферу для вашего аудиовизуального произведения.

    Гармоничное звуковое оформление поможет лучше передать идею и погрузить зрителя в настроение кино, игры или анимационного ролика.`,
    `Мы занимаемся написанием музыки в различных её направлениях.
    
    Создадим для вас полноценный трек и поработаем над качеством его звучания, проведём сведение и мастеринг, а также подготовим композицию к релизу на цифровых площадках`,
    `Вместе с вами проведём подробный анализ рынка и разработаем уникальный звуковой дизайн для вашего бренда!


    Полностью продумаем концепцию звука для бренда, заставим логотип буквально "звучать" и запоминаться, озвучим интерфейс любой сложности и сделаем узнаваемыми на фоне конкурентов.`],
};
export default class SliderElement {
  constructor() {
    this.slides = Banner;
    this.currentSlide = 0;
  }

  blurSizeAnimation(delay) {
    const arrow = document.querySelector('.banner_blur');
    setTimeout(() => {
      arrow.style.transition = '1s width ease-in-out';
      arrow.style.width = '100vw';
    }, delay);
  }

  textFadeOutAnimation() {
    const bannerText = document.querySelectorAll('.banner_blur>*');
    bannerText.forEach((el) => {
      // eslint-disable-next-line no-param-reassign
      el.style.transition = '.1s opacity';
      // eslint-disable-next-line no-param-reassign
      el.style.opacity = 0;
    });
  }

  ImageMove(el, left, delay) {
    setTimeout(() => {
      // eslint-disable-next-line no-param-reassign
      el.style.left = left;
      // eslint-disable-next-line no-param-reassign
      el.style.transition = '1s left ease-in-out';
    }, delay);
  }

  clone(el) {
    const clone = el.cloneNode(true);
    clone.classList.add('banner_in');
    el.after(clone);
    return clone;
  }

  replaceEl(oldEl, newEl, delay) {
    setTimeout(() => {
      oldEl.remove();
      newEl.classList.remove('banner_in');
    }, delay);
  }

  textFadeInAnimation(delay) {
    setTimeout(() => {
      const bannerText = document.querySelectorAll('.banner_blur>*');
      bannerText.forEach((el) => {
        // eslint-disable-next-line no-param-reassign
        el.style.transition = '.7s opacity';
        // eslint-disable-next-line no-param-reassign
        el.style.opacity = 1;
      });
    }, delay);
  }

  slide() {
    this.currentSlide += 1;
    if (this.currentSlide >= this.slides.images.length) this.currentSlide = 0;
    const banner = document.querySelector('.banner');
    this.textFadeOutAnimation();
    this.blurSizeAnimation(150);
    this.ImageMove(banner, '100%', 400);
    const newBanner = this.clone(banner);
    newBanner.style.backgroundImage = `url(${this.slides.images[this.currentSlide]})`;
    newBanner.style.left = '-101%';
    const newblur = document.querySelector('.banner_in>.banner_blur');
    newblur.style.opacity = 0;
    setTimeout(() => {
      const title = document.querySelector('.banner__title');
      title.innerHTML = `${this.slides.titles[this.currentSlide]}`;
      const desc = document.querySelector('.banner__desc');
      desc.innerHTML = `${this.slides.desc[window.currentSlide]}`;
    }, 100);
    this.ImageMove(newBanner, '0', 350);
    this.replaceEl(banner, newBanner, 1400);
    setTimeout(() => {
      newblur.style.transition = '.2s opacity';
      newblur.style.opacity = 1;
      const control = document.querySelector('.banner__control');
      control.addEventListener('click', () => {
        this.slide();
      });
      const btn = document.querySelector('.banner__btn');
      btn.addEventListener('click', () => {
        const wrapper = document.createElement('div');
        wrapper.classList.add('wrapper');
        const body = document.querySelector('body');
        body.appendChild(wrapper);
        const form = document.querySelector('.form');
        form.style.display = 'flex';
        body.style.overflowY = 'hidden';
        wrapper.addEventListener('click', () => {
          wrapper.remove();
          form.style.display = 'none';
          body.style.overflowY = 'scroll';
        });
      });
    }, 1400);
    this.textFadeInAnimation(1600);
  }
}
