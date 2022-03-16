<template>
  <div class="slider">
    <div v-swiper="swiperOption" ref="swiper">
      <div class="swiper-wrapper">
        <div
          class="swiper-slide d-flex flex-column"
          v-for="(item, index) in items"
          :key="`item-${index}`"
        >
          <div class="slider__img">
            <img :src="require(`@/assets/img/${item.img}`)" alt="img" />
          </div>
          <div class="slider__info">
            <h2 class="slider__info-title">{{ item.title }}</h2>
            <p class="slider__info-article">{{ item.article }}</p>
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

      activeSlideInd: 0,

      swiperOption: {
        speed: 1500,
        autoplay: {
          delay: 3000,
          disableOnInteraction: true,
        },

        loop: true,
        slidesPerView: 3,
        slidesPerGroup: 3,
        freeMode: true,
        spaceBetween: 30,
        // on: {
        //   init() {
        //     this.el.addEventListener("mouseenter", () => {
        //       this.autoplay.stop();
        //     });

        //     this.el.addEventListener("mouseleave", () => {
        //       this.autoplay.start();
        //     });
        //   },
        // },
        breakpoints: {
          1475: {
            slidesPerView: 4,
            slidesPerGroup: 4,
          },
          1840: {
            slidesPerView: 5,
            slidesPerGroup: 5,
          },
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
.slider {
  position: relative;
  margin-bottom: 120px;
  &::after {
    position: absolute;
    content: "";
    top: 0;
    left: 0;
    height: 360px;
    width: 300px;
    background: linear-gradient(90deg, #ffffff 0%, rgba(255, 255, 255, 0) 100%);
    z-index: 1;
  }
  &::before {
    position: absolute;
    content: "";
    top: 0;
    right: 0;
    height: 360px;
    width: 300px;
    background: linear-gradient(
      -90deg,
      #ffffff 0%,
      rgba(255, 255, 255, 0) 100%
    );
    z-index: 1;
  }
  @media (max-width: 1100px) {
    &::after,
    &::before {
      width: 100px;
    }
  }
  .swiper-wrapper {
    display: flex;
    gap: 35px;
  }
  .swiper-slide {
    margin-right: 30px;
  }
  &__img {
    width: 400px;
    height: 360px;
    margin-bottom: 10px;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    @media (max-width: 1100px) {
      width: 350px;
      height: 300px;
    }
    @media (max-width: 940px) {
      width: 300px;
      height: 250px;
      margin-bottom: 5px;
    }
  }
  &__info {
    &-title {
      font-size: 16px;
      line-height: 24px;
      font-weight: 600;
      margin-bottom: 5px;
      @media (max-width: 940px) {
        font-size: 14px;
        margin-bottom: 0;
      }
    }
    &-article {
      font-weight: 300;
      color: #d1d0d0;
      @media (max-width: 940px) {
        font-size: 14px;
      }
    }
  }
}
</style>
