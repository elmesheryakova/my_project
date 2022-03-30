<template>
  <div class="promo__mobile-slider swiper" v-swiper="{}" ref="swiper">
    <div class="swiper-wrapper">
      <div v-for="(item, index) in images" :key="index" class="promo__mobile-slide swiper-slide">
        <img
          :src="item.src"
          :alt="item.alt">
      </div>
    </div>
  </div>
</template>

<script>
import {directive} from "vue-awesome-swiper";

export default {
  name: "PromoMobileSlider",
  props: {
    images: Array
  },
  data() {
    return {
      directives: {
        swiper: directive
      }
    }
  }
}
</script>

<style lang="scss">
.promo__mobile-slider {
  position: absolute !important;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  display: none;

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

@include down('sm') {
  .promo__mobile-slider {
    display: flex;
  }
}

</style>
