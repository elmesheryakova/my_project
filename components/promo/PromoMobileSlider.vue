<template>
  <div class="promo__mobile-slider swiper">
    <div class="swiper-wrapper">
      <div
        v-for="(item, index) in images"
        :key="index"
        class="promo__mobile-slide swiper-slide"
      >
        <p class="promo__mobile-text">{{ item.text }}</p>
        <img :src="require(`@/assets/img/${item.src}`)" :alt="item.alt" />
      </div>
    </div>
  </div>
</template>

<script>
import { directive } from "vue-awesome-swiper";

export default {
  name: "PromoMobileSlider",
  props: {
    images: Array,
  },
  data() {
    return {
      directives: {
        swiper: directive,
      },
    };
  },
};
</script>

<style lang="scss">
.promo__mobile-slider {
  position: absolute !important;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  // display: none;

  img {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}

.promo__mobile-slide {
  height: 100%;
}
.promo__mobile-text {
  position: absolute;

  top: 45%;
  left: 20px;
  font-weight: 600;
  width: 200px;
  font-size: 32px;
  line-height: 40px;
  color: $primary;
  z-index: 99;
}
@include down("sm") {
  .promo__mobile-slider {
    display: flex;
  }
}
</style>
