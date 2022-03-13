<template>
  <div class="slider-solution">
    <div class="container">
      <h2 class="block__title"><span>Решения</span> для других напитков</h2>
    </div>
    <div class="container">
      <div v-swiper="swiperOption" ref="swiper">
        <div class="swiper-wrapper">
          <div
            class="swiper-slide"
            v-for="(item, index) in solutions"
            :key="`item-${index}`"
          >
            <div class="slider-solution__wrap">
              <div class="slider-solution__item">
                <h4 class="slider-solution__title">{{ item.title }}</h4>
                <div class="slider-solution__img">
                  <img :src="require(`@/assets/img/${item.img}`)" alt="img" />
                </div>
              </div>
              <div class="slider-solution__icon">
                <svgicon :name="item.svg" />
              </div>
            </div>
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
      solutions: this.$store.state.solutions,
      activeSlideInd: 0,

      swiperOption: {
        speed: 1500,
        autoplay: {
          delay: 3000,
          disableOnInteraction: true,
        },

        loop: true,
        slidesPerView: 4,
        slidesPerGroup: 4,
        freeMode: true,
        spaceBetween: 30,
        on: {
          init() {
            this.el.addEventListener("mouseenter", () => {
              this.autoplay.stop();
            });

            this.el.addEventListener("mouseleave", () => {
              this.autoplay.start();
            });
          },
        },
        // breakpoints: {
        //   1475: {
        //     slidesPerView: 4,
        //     slidesPerGroup: 4,
        //   },
        //   1840: {
        //     slidesPerView: 5,
        //     slidesPerGroup: 5,
        //   },
        // },
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
.slider-solution {
  position: relative;
  padding: 120px 0;
  background-color: #f2f3f6;
  // &::before {
  //   position: absolute;
  //   content: "";
  //   top: 0;
  //   right: 0;
  //   height: 360px;
  //   width: 300px;
  //   background: linear-gradient(
  //     -90deg,
  //     #ffffff 0%,
  //     rgba(255, 255, 255, 0) 100%
  //   );
  //   z-index: 1;
  // }
  @media (max-width: 1100px) {
    &::before {
      width: 100px;
    }
  }
  .swiper-wrapper {
    display: flex;
    gap: 35px;
  }
  .swiper-slide {
    margin-right: 80px;
  }
  &__title {
    padding: 20px 20px 0;
  }
  &__item {
    background-color: #fff;
    margin-bottom: 60px;
    position: relative;
    &::after {
      position: absolute;
      content: "";
      width: 100%;
      bottom: -28px;
      left: 0;
      z-index: 8;
      border: 30px solid transparent;
      border-top: 0px solid transparent;
      border-left: 25px solid #fff;
    }
  }
  &__img {
    width: 250px;
    height: 220px;
    padding: 20px;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  &__icon {
    width: 160px;
    height: 160px;
    padding: 15px;
    background-color: #fff;
    svg {
      width: 100%;
      height: 100%;
      fill: transparent;
      @media (max-width: 1500px) {
        height: 100px;
      }
      @media (max-width: 1190px) {
        height: 70px;
      }
    }
    @media (max-width: 991px) {
      padding-right: 20px;
    }
  }
}
</style>
