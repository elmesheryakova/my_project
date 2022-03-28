<template>
  <div :style="`background: #F2F3F6`">
    <div class="slider-sol">
      <div class="container">
        <h2 class="block__title"><span>Решения</span> для других напитков</h2>
      </div>

      <div class="container">
        <div class="slider-sol">
          <div class="slider-sol__container">
            <div class="swiper-container">
              <!-- Additional required wrapper -->
              <div class="swiper-wrapper">
                <div
                  class="swiper-slide"
                  v-for="(item, index) in solutions"
                  :key="`item-${index}`"
                >
                  <div class="slider-sol__wrap">
                    <div class="slider-sol__item">
                      <h4 class="slider-sol__title">{{ item.title }}</h4>
                      <div class="slider-sol__img">
                        <img
                          :src="require(`@/assets/img/${item.img}`)"
                          alt="img"
                        />
                      </div>
                    </div>
                    <div class="slider-sol__icon">
                      <svgicon :name="item.svgHover" class="svg-color" />
                      <svgicon :name="item.svg" class="svg-white" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="swiper-button-next">
        <svgicon name="arrow-slider" />
      </div>
    </div>
  </div>
</template>

<script>
import Swiper, { Navigation, Pagination } from "swiper";
import "swiper/swiper-bundle.css";

Swiper.use([Navigation, Pagination]);

export default {
  data() {
    return {
      solutions: this.$store.state.solutions,
    };
  },
  mounted() {
    new Swiper(".swiper-container", {
      loop: true,

      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },

      slidesPerView: 3,
      spaceBetween: 20,
      breakpoints: {
        600: {
          slidesPerView: 3,
        },
        900: {
          slidesPerView: 5,
        },
      },
    });
  },
};
</script>
<style lang="scss">
.slider-sol {
  .swiper-button-next {
    width: 80px !important;
  }
  .swiper-button-next:after {
    opacity: 0;
  }
}
</style>

