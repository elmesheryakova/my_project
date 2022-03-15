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
        notNextTick: true, //if notNextTick is set to true, the component will not instantiate the swiper via NextTick, which means you can get the swiper object in the first place, if you need to just load the swiper object to do something, then this property must be true
        direction: "vertical", //move in vertical direction
        grabCursor: true, //the pointer will turn into palm shape when the mouse covers the swiper, the pointer will turn into grab hand shape when dragging
        setWrapperSize: true, //Swiper use flexbox layout (display: flex), turn on this setting will add a width or height equal to the sum of the slides on the Wrapper, may need to use in browsers that do not have good support for flexbox layout.
        autoHeight: true, //autoHeight. When set to true, the wrapper and container will change with the height of the current slide
        slidesPerView: 1, //Set the number of slides the slider container can display at the same time (carousel mode). Can be set to a number (can be decimal, decimal cannot be looped), or 'auto' will automatically set the number according to the width of the slides. loop mode if set to 'auto' also need to set another parameter loopedSlides.
        // mousewheel: true, //Enable mouse wheel to control Swiper switching. You can set the mouse option, default value false
        mousewheelControl: true, //same as above
        height: window.innerHeight, // height setting, take up the full height of the device
        resistanceRatio: 0, // resistance rate. The ratio of the size of the edge resistance. The smaller the value the greater the resistance the more difficult it is to drag the slide away from the edge, 0 when it is completely impossible to drag away. The business needs
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
