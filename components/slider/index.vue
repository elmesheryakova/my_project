<template>
  <div
    class="slider"
    :class="{ 'slider--products': $route.name === 'products-current-slug' }"
  >
    <div class="swiper-wrapper">
      <nuxt-link
        class="swiper-slide d-flex flex-column"
        v-for="(item, index) in items"
        :key="`item-${index}`"
        :to="`/products/${item.parent_slug[0].slug}/${item.slug}`"
        v-scroll-to="{ el: `#${item.slug}` }"
      >
        <div class="slider__img">
          <img :src="item.image" alt="img" />
        </div>
        <div class="slider__info">
          <h2 class="slider__info-title">{{ item.name }}</h2>
          <p class="slider__info-article">{{ item.sku }}</p>
        </div>
      </nuxt-link>
    </div>
    <div class="swiper-button-next">
      <svgicon name="arrow-slider" />
    </div>
    <div class="swiper-button-prev">
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
    new Swiper(".slider", {
      loop: true,

      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },

      slidesPerView: 3,
      slidesPerGroup: 3,
      spaceBetween: 10,
      breakpoints: {
        900: {
          slidesPerView: 3,
          slidesPerGroup: 3,
        },
        1540: {
          slidesPerView: 4,
          slidesPerGroup: 4,
        },
        1840: {
          slidesPerView: 5,
          slidesPerGroup: 5,
        },
      },
    });
  },
};
</script>
<style lang="scss">
.slider {
  position: relative;
  margin-bottom: 120px;
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
  .swiper-button-prev {
    transform: rotate(180deg);
  }
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
    z-index: 2;
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
  // .swiper-slide {
  //   margin-right: 30px;
  // }
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
  &--products {
    margin-bottom: 0;
    overflow: hidden;
    &::after,
    &::before {
      width: 130px;
    }
    .swiper-wrapper {
      gap: 5px;
    }

    .slider__img {
      height: 260px;
      img {
        width: 220px;
        height: 260px;
        object-fit: cover;
      }
    }
    .slider__info {
      &-title {
        font-size: 14px;
        line-height: 24px;
        font-weight: 600;
        margin-bottom: 5px;
        @media (max-width: 940px) {
          font-size: 13px;
          margin-bottom: 0;
        }
      }
      &-article {
        font-size: 13px;
        font-weight: 300;
        color: #d1d0d0;
        @media (max-width: 940px) {
          font-size: 12px;
        }
      }
    }
    .swiper-button-next,
    .swiper-button-prev {
      top: 150px;
      svg {
        width: 35px;
      }
    }
    .swiper-button-next {
      right: -13px;
    }
    .swiper-button-prev {
      left: -12px;
    }
  }
}
</style>
