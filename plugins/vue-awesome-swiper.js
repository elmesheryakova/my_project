import Vue from 'vue';
import VueAwesomeSwiper from 'vue-awesome-swiper';
import { Swiper, EffectFade } from 'swiper';

// import custom style
// import '@/assets/css/swiper.css';

Swiper.use([EffectFade]);
Vue.use(VueAwesomeSwiper);
