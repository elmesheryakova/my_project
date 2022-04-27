<template>
  <section class="partners">
    <div class="container">
      <h2 class="partners__title">Партнеры</h2>
      <div class="partners__slider swiper" v-swiper:mySwiper="swiperOption">
        <button class="partners__slider-next" @click.prevent="nextSlide">
          <svg
            width="34"
            height="36"
            viewBox="0 0 34 36"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M29.6876 22.2156C28.956 24.9459 27.3859 27.3777 25.1986 29.1681C23.0113 30.9585 20.3172 32.0172 17.4962 32.1949C14.6751 32.3725 11.8695 31.6602 9.47486 30.1584C7.08022 28.6566 5.21739 26.441 4.14904 23.824C3.08068 21.2071 2.86071 18.3208 3.52012 15.5722C4.17953 12.8236 5.68507 10.3512 7.82445 8.50385C9.96383 6.65646 12.6291 5.52719 15.4445 5.27528C18.2599 5.02336 21.0833 5.66151 23.5167 7.09975L23.0733 7.8498C20.797 6.50438 18.1558 5.90742 15.5221 6.14307C12.8885 6.37873 10.3952 7.43511 8.39388 9.16328C6.39257 10.8914 4.9842 13.2042 4.36734 15.7754C3.75048 18.3467 3.95627 21.0467 4.95567 23.4947C5.95508 25.9428 7.69768 28.0154 9.93778 29.4203C12.1779 30.8252 14.8024 31.4915 17.4414 31.3253C20.0804 31.1591 22.6006 30.1688 24.6467 28.4939C26.6929 26.8191 28.1617 24.5442 28.8461 21.9901L29.6876 22.2156Z"
              fill="#1B2AC9"
            />
            <rect
              width="0.81572"
              height="7.45709"
              rx="0.40786"
              transform="matrix(0.897466 -0.441084 0.441131 0.897443 19.6368 0.933594)"
              fill="#1B2AC9"
            />
            <rect
              x="17.0157"
              y="11.3984"
              width="0.81572"
              height="7.73249"
              rx="0.40786"
              transform="rotate(-120.571 17.0157 11.3984)"
              fill="#1B2AC9"
            />
          </svg>
        </button>
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="(i, idx) in items" :key="idx">
            <div class="partners__company">
              {{ i.name }}
            </div>
            <div class="partners__quote">
              {{ i.text }}
            </div>
          </div>
        </div>
      </div>
      <div class="partners-logos">
        <button
          class="partners-logos__item"
          v-for="(i, idx) in items"
          :key="idx"
        >
          <span class="partners-logos__img">
            <img :src="i.partners[0].image" />
          </span>
        </button>
      </div>
    </div>
  </section>
</template>

<script>
import { directive } from "vue-awesome-swiper";

export default {
  name: "PartnersSlider",
  props: {
    directives: {
      swiper: directive,
    },
    items: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    var self = this;
    return {
      swiperOption: {
        loop: true,
        speed: 1000,
        effect: "fade",
        slidesPerView: 1,
        fadeEffect: {
          crossFade: true,
        },
        navigation: {
          nextEl: ".partners__slider-next",
        },
        on: {
          slideChange: self.onSlideChange,
        },
      },
    };
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
      var self = this;

      this.$nextTick(() => {
        // @TODO do this through refs
        self.partnerLogos = document.querySelectorAll(".partners-logos__item");

        self.partnerLogos.forEach(function (item) {
          item.addEventListener("click", function (e) {
            e.preventDefault();
            var clickedIndex = Array.prototype.indexOf.call(
              self.partnerLogos,
              item
            );
            self.mySwiper.slideToLoop(clickedIndex);
          });
        });
      });
    },
    onSlideChange(swiper) {
      var slideIndex = swiper.realIndex;
      if (this.partnerLogos && this.partnerLogos.length > 0) {
        this.partnerLogos.forEach(function (item, idx) {
          item.classList.remove("active");
          if (slideIndex === idx) {
            item.classList.add("active");
          }
        });
      }
    },
    nextSlide() {
      this.mySwiper.slideNext();
    },
  },
};
</script>

<style lang="scss">
.partners {
  padding-top: 80px;
  padding-bottom: 100px;
  background-color: white;
}

.partners__title {
  color: $primary;
  font-size: 124px;
  margin-bottom: 50px;
  font-weight: 700;
}

.partners__slider {
  position: relative;
  overflow: hidden;
}

.partners__company {
  padding-left: 100px;
  padding-right: 100px;
  font-weight: 300;
  font-size: 24px;
  min-height: 64px;
  display: flex;
  align-items: center;
  margin-bottom: 20px;
}

.partners__quote {
  padding-left: 100px;
  padding-right: 110px;
  position: relative;
  font-size: 36px;
  font-weight: 700;
  margin-bottom: 20px;
  min-height: 110px;
  display: flex;
  align-items: center;

  &:before,
  &:after {
    content: "«";
    line-height: 1;
    font-size: 144px;
    position: absolute;
    left: 0;
    top: 50%;
    margin-top: -0.13em;
    transform: translateY(-50%);
    color: $blue-2;
    opacity: 0.2;
  }

  &:after {
    content: "»";
    left: auto;
    right: 0;
  }
}

.partners__slider-next {
  position: absolute;
  left: 0;
  top: 4px;
  z-index: 2;
  background-color: white;
  border-radius: 50%;
  cursor: pointer;
  border: 1px solid $primary;
  height: 64px;
  width: 64px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.4s, transform 0.4s;

  svg path,
  svg rect {
    transition: fill 0.4s;
  }

  &:hover {
    background-color: $primary;
    transform: rotate(360deg);

    svg path,
    svg rect {
      fill: white;
    }
  }
}

.partners-logos {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}

.partners-logos__item {
  flex-grow: 0;
  flex-shrink: 0;
  width: 16.6666%;
  padding-left: 10px;
  padding-right: 10px;
  //flex-basis: 152px;
  height: 184px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  border: none;
  transition: opacity 0.3s, transform 0.3s;
  img {
    max-width: 100%;
    height: auto;
  }

  &:hover {
    opacity: 0.5;
  }

  &.active {
    pointer-events: none;
    transform: scale(1.2);
  }
}

@include down("xl") {
  .partners__title {
    font-size: 80px;
  }
  .partners__quote {
    font-size: 24px;
  }
  .partners-logos__item {
    width: 33.3333%;
  }
}

@include down("lg") {
  .partners__title {
    font-size: 48px;
  }
  .partners__company {
    font-size: 16px;
    margin-bottom: 54px;
  }
  .partners__quote {
    font-size: 16px;
    font-weight: 400;
    line-height: 2;
  }
  .partners-logos {
    justify-content: space-between;
  }
  //.partners-logos__item {
  //  width: 84px;
  //  height: 84px;
  //}
}

@include down("md") {
}

@include down("sm") {
  .partners-logos__item {
    height: 100px;
    padding-left: 10px;
    padding-right: 10px;
  }

  .partners__quote {
    padding-left: 60px;
    padding-right: 50px;
    line-height: 1.5;
  }

  .partners__company {
    padding-left: 80px;
    padding-right: 30px;
  }
  .partners {
    padding-bottom: 70px;
  }
  .partners__slider-next {
    top: 0;
  }
  .partners__quote:before,
  .partners__quote:after {
    font-size: 90px;
  }
}
</style>
