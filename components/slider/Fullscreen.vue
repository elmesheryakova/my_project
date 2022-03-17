<template>
  <div class="slider-fullscreen">
    <div v-swiper="swiperOption" ref="swiper">
      <div class="swiper-wrapper">
        <div
          class="swiper-slide d-flex flex-column"
          v-for="(item, index) in items"
          :key="`item-${index}`"
        >
          <div class="container">
            <AdvantagesItem :item="item" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import { directive } from "vue-awesome-swiper";
export default {
  props: {
    items: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      directives: {
        swiper: directive,
      },

      swiperOption: {
        releaseOnEdges: true,
        notNextTick: true,
        direction: "vertical",
        grabCursor: true,
        setWrapperSize: true,
        autoHeight: true,
        slidesPerView: 1,

        mousewheelControl: true,
        height: window.innerHeight,
        resistanceRatio: 0,
        observeParents: true,
        mousewheel: {
          invert: false,
          releaseOnEdges: true,
        },
      },
    };
  },

  computed: {
    swiper() {
      return this.$refs.swiper.swiper;
    },
  },

  methods: {},
  created() {},
  mounted() {
    this.swiper.slideTo();
  },
};
</script>
<style lang="scss">
.slider-fullscreen {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  .swiper-wrapper {
    width: 100vw;
    height: 100vh;
  }

  .swiper-slide {
    text-align: center;
    font-size: 18px;
    background: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
  }
}
</style>
