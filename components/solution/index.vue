
<template>
  <div class="slider-thumbs">
    <div
      v-swiper="swiperOptionTop"
      class="gallery-top"
      ref="swiperTop"
      @slideChange="onSlideChange"
    >
      <div class="swiper-wrapper">
        <div
          class="swiper-slide"
          v-for="(item, index) in items"
          :key="`item-${index}`"
        >
          <div class="gallery-top__info">
            <h2 class="gallery-top__title">{{ item.name }}</h2>
            <p class="gallery-top__text" v-html="item.description"></p>
          </div>

          <div class="gallery-top__img d-flex">
            <div class="gallery-top__img-1">
              <img :src="item.images[0]" alt="img" />
              <nuxt-link
                class="gallery-top__link"
                :to="{ name: 'solutions-slug', params: { slug: item.slug } }"
              >
                <svgicon name="arrow-fullscreen" />
              </nuxt-link>
            </div>
            <div class="gallery-top__img-2">
              <img :src="item.images[1]" alt="img" />
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="slider-container">
      <div
        v-swiper="swiperOptionThumbs"
        class="swiper gallery-thumbs"
        ref="swiperThumbs"
      >
        <div class="swiper-wrapper">
          <div
            class="
              swiper-slide
              d-flex
              align-items-center
              justify-content-center
            "
            v-for="(item, index) in items"
            :key="`item-${index}`"
            :class="{ 'active-thumb': activeSlideInd == index }"
            @click="onThumbClick(index)"
            :style="
              activeSlideInd == index
                ? 'background: #1B2AC9'
                : 'background: #fff'
            "
          >
            <div class="thumb-inner">
              <img
                :src="item.svg_icon_white"
                alt="img"
                v-if="activeSlideInd == index"
                class="img"
              />
              <img :src="item.svg_icon" alt="img" v-else class="img" />

              <p class="gallery-trumbs__text">
                {{ item.name }}
              </p>
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
      activeSlideInd: 0,

      swiperOptionTop: {
        spaceBetween: 10,
        slidesPerView: 1,
        slidesPerGroup: 1,
      },

      swiperOptionThumbs: {
        touchRatio: 0.2,
        spaceBetween: 10,
        navigation: {
          nextEl: ".slider-button-next-thumb",
          prevEl: ".slider-button-prev-thumb",
        },
      },

      doubleCount: 3,
    };
  },

  computed: {},

  methods: {
    onThumbClick(ind) {
      this.$refs.swiperTop.swiper.slideTo(ind);

      this.activeSlideInd = ind;
    },

    onSlideChange(e) {
      this.activeSlideInd = this.$refs.swiperTop.swiper.activeIndex;
    },
  },
  created() {},
  mounted() {
    this.$refs.swiperTop.swiper.slideTo(this.clickedInd);
  },
};
</script>
<style lang="scss">
.slider-thumbs {
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  background-color: #fff;
  height: 100vh;

  @media (max-width: 1400px) {
    padding: 30px 0;
    height: 100%;
  }
  @media (max-width: 1190px) {
    padding: 10px 0;
  }
}
.gallery-top {
  overflow: hidden;
  max-height: 800px;
  height: 100%;
  width: 100%;

  .swiper-wrapper {
    display: flex;
    height: 100%;
  }
  .swiper-slide {
    min-width: 100%;
    display: flex;
  }

  &__info {
    max-width: 600px;
    margin-left: auto;
    padding-right: 50px;
    align-self: center;
    @media (max-width: 1190px) {
      margin-left: 20px;
    }
  }
  &__title {
    color: $primary;
    font-size: 64px;
    font-weight: 900;
    padding-bottom: 60px;
    position: relative;
    &:after {
      position: absolute;
      content: "";
      height: 37px;
      width: 1px;
      background-color: $black;
      top: 85px;
      left: 3px;
    }
    @media (max-width: 1500px) {
      font-size: 54px;
      &:after {
        top: 95px;
      }
    }
    @media (max-width: 1190px) {
      font-size: 45px;
      padding-bottom: 80px;
      &:after {
        top: 70px;
        height: 50px;
      }
    }
    @media (max-width: 991px) {
      font-size: 40px;
      &:after {
        top: 65px;
      }
    }
  }
  &__text {
    @media (max-width: 991px) {
      font-size: 14px;
      line-height: 18px;
    }
  }

  &__img {
    margin-left: auto;

    &-1 {
      align-self: flex-end;
      position: relative;
      @media (max-width: 1400px) {
        margin-top: 100px;
      }
    }
    &-1,
    &-2 {
      height: 516px;
      width: 480px;
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
      @media (max-width: 1600px) {
        height: 480px;
        width: 380px;
      }
      @media (max-width: 1400px) {
        height: 400px;
        width: 320px;
      }
      @media (max-width: 1190px) {
        height: 350px;
        width: 280px;
      }
      @media (max-width: 991px) {
        height: 350px;
        width: 240px;
      }
    }
  }
  &__link {
    width: 160px;
    height: 160px;
    background-color: $primary;
    border-radius: 50%;
    position: absolute;
    top: -80px;
    left: -80px;
    display: block;
    svg {
      width: 47px;
      height: 47px;
      fill: transparent;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      z-index: 2;

      path {
        stroke: $white;
      }
    }
    @media (max-width: 1500px) {
      height: 100px;
      width: 100px;
      top: -50px;
      left: -50px;
      svg {
        width: 40px;
        height: 40px;
      }
    }
  }
  @media (min-width: 1920px) {
    max-width: 1920px;
    margin: 0 auto;
  }
  @media (max-width: 1400px) {
    margin-bottom: 30px;
  }
  @media (max-width: 1190px) {
    margin-bottom: 10px;
  }
}

.gallery-thumbs {
  .swiper-wrapper {
    display: grid;
    grid-template-columns: repeat(6, 1fr);
  }
  .swiper-slide {
    width: 100%;
    padding: 10px 0;
    cursor: pointer;
    font-weight: normal;
    font-size: 24px;
    height: 160px;

    &.active-thumb {
      color: $white;
    }
    &:hover {
      border: 2px solid $primary;
    }
    @media (max-width: 1500px) {
      font-size: 20px;
    }
    @media (max-width: 1320px) {
      padding: 30px 0;
      background-position: 30px !important;
    }
    @media (max-width: 1190px) {
      font-size: 16px;
      background-size: contain !important;

      height: 100%;
    }
    @media (max-width: 1010px) {
      background-position: 10px !important;
    }
  }

  .thumb-inner {
    display: flex;
    align-items: center;
    justify-content: center;
    .img {
      margin-right: 37px;
    }
  }
}
</style>
