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
  padding: 120px 0;
  background-color: #f2f3f6;
  position: relative;
  height: 100vh;

  .swiper-wrapper {
    display: flex;
    gap: 35px;
    @media (max-width: 1024px) {
      gap: 10px;
    }
  }

  .swiper-slide {
    margin-right: 80px;
  }

  .swiper-container {
    overflow: hidden;
  }

  &__container {
    margin-right: -600px;
  }

  .swiper-button-prev,
  .swiper-button-next {
    width: 45px;
    height: 45px;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
  }

  .swiper-button-prev {
    transform: rotate(180deg);
    left: 0;
    display: none;
  }

  .swiper-button-next {
    right: 0;

    &::before {
      position: absolute;
      content: "";
      top: -250px;
      right: 0;
      height: 600px;
      width: 300px;
      background: linear-gradient(
          -90deg,
          #f2f3f7 0%,
          rgba(242, 243, 247, 0) 100%
        ),
        linear-gradient(-90deg, #f2f3f7 0%, rgba(242, 243, 247, 0) 100%);

      z-index: -1;
      @media (max-width: 1940px) {
        top: -210px;
      }
      @media (max-width: 1024px) {
        width: 150px;
      }
    }
    @media (max-width: 1940px) {
      top: 60%;
    }
  }

  &__title {
    padding: 20px 20px 0;
    @media (max-width: 1024px) {
      padding: 10px 10px 0;
    }
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
    padding: 20px;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    // @media (max-width: 1024px) {
    //   width: 200px;
    //   height: 180px;
    //   padding: 10px;
    // }
  }

  &__icon {
    width: 160px;
    height: 160px;
    background-color: #fff;
    cursor: pointer;
    position: relative;

    .svg-color,
    .svg-white {
      position: absolute;
      width: 100%;
      height: 100%;
      fill: transparent;
      padding: 20px;
    }

    .svg-white {
      opacity: 0;
    }

    @media (max-width: 1024px) {
      width: 120px;
      height: 120px;
    }
  }

  &__wrap {
    cursor: pointer;

    &:hover {
      .svg-color {
        opacity: 0;
        transition: 0.3s ease-out;
      }

      .svg-white {
        opacity: 1;
        background-color: $primary;
        transition: 0.3s ease-out;
      }

      .slider-sol__item {
        box-shadow: 0px 20px 60px 0px #17202929;
        transition: 0.3s ease-out;
      }
    }
  }

  &--frontpage {
    min-height: 100vh;
    padding-bottom: 160px;
    height: auto;
  }
}
</style>

