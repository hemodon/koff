import 'normalize.css';
import './style.scss';
import Swiper from 'swiper';
import { Navigation, Thumbs } from 'swiper/modules';
import 'swiper/css';

const thumbnailsSlider = new Swiper('.product__thumbnails-slider', {
  spaceBetween: 10,
  slidesPerView: 4,
  freeMode: true,
  watchSlidesProgress: true,
});
new Swiper('.product__main-slider', {
  spaceBetween: 10,
  navigation: {
    nextEl: '.product__arrow-next',
    prevEl: '.product__arrow-prev',
  },
  modules: [Navigation, Thumbs],
  thumbs: {
    swiper: thumbnailsSlider,
  },
});
