<template>
  <div class="slider-product">
    <div class="swiper-wrapper">
      <div
        class="swiper-slide d-flex flex-column"
        v-for="(item, index) in items"
        :key="`item-${index}`"
      >
        <div class="slider-product__img">
          <img :src="item" alt="img" />
        </div>
      </div>
    </div>
    <div class="swiper-button-next" v-if="items">
      <svgicon name="arrow-slider" />
    </div>
    <div class="swiper-button-prev" v-if="items">
      <svgicon name="arrow-slider" />
    </div>
  </div>
</template>
<script>
import Swiper, { Navigation, Pagination } from "swiper";
import "swiper/swiper-bundle.css";

Swiper.use([Navigation, Pagination]);

export default {
  props: {
    items: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      solutions: this.$store.state.solutions,
    };
  },
  mounted() {
    new Swiper(".slider-product", {
      loop: true,

      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },

      slidesPerView: 1,
      slidesPerGroup: 1,
      // spaceBetween: 10,
    });
  },
};
</script>
<style lang="scss">
.slider-product {
  overflow: hidden;
  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }

  .swiper-button-prev,
  .swiper-button-next {
    width: 50px !important;
    svg {
      width: 50px;
    }
  }
  .swiper-button-prev:after,
  .swiper-button-next:after {
    opacity: 0;
    width: 0;
  }
  .swiper-button-next {
    right: -25px;
  }
  .swiper-button-prev {
    transform: rotate(180deg);
    left: -27px;
  }
}
</style>
