<template>
  <section class="team">
    <div class="container" v-if="$route.name === 'index'">
      <h2 class="team__title">Команда</h2>
    </div>
    <div class="container" v-else>
      <h2 class="news__title">Команда <span> PET-EXPERT</span></h2>
    </div>

    <div class="team__slider swiper" v-swiper:mySwiper="swiperOption">
      <div class="swiper-wrapper">
        <div
          class="swiper-slide team__slide"
          v-for="(item, index) in items"
          :key="index"
        >
          <div class="team__img" v-if="item.image">
            <img
              :src="item.image[0]"
              width="412"
              height="618"
              :alt="item.name"
            />
          </div>
          <div class="team__slide-content">
            <div class="team__slide-content-wrap">
              <div class="team__slide-name">{{ item.name }}</div>
              <div class="team__slide-job">{{ item.position }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- END team -->
</template>

<script>
import { directive } from "vue-awesome-swiper";

export default {
  name: "TeamSlider",
  props: {
    pinSection: Boolean,
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
        slidesPerView: 2,
        loop: true,
        grabCursor: false,
        spaceBetween: 0,
        speed: 1000,
        autoplay: {
          delay: 2000,
        },
        freeModeMomentum: false,
        allowTouchMove: true,
        centeredSlides: true,
        slideToClickedSlide: true,
        on: {
          init: self.onSliderInit,
        },
        breakpoints: {
          360: {
            slidesPerView: 3,
          },
          600: {
            slidesPerView: 5,
          },
          992: {
            centeredSlides: false,
            slidesPerView: 6,
            loopedSlides: self.items.length,
            autoplay: false,
            speed: 10000,
            allowTouchMove: true,
            slideToClickedSlide: false,
            freeModeMomentum: false,
            watchSlidesVisibility: false,
            watchSlidesProgress: true,
          },
        },
      },
    };
  },
  computed: {
    isDesktop() {
      return this.$mq === "xl" || this.$mq === "xl2";
    },
    isTablet() {
      return this.$mq === "lg" || this.$mq === "md";
    },
    itemsLength() {
      return this.items.length;
    },
  },

  mounted() {
    var teamSection = this.$el;
    var self = this;
    this.sliderSpeed = 50000;
    this.hoveredSlide = null;
    this.hoveredSlides = [];

    if (this.isDesktop && this.pinSection) {
      var promoConceptsSections = this.$parent.$refs.promoConcepts;

      // Получаем последнюю концепцию
      var promoConceptsLastSection =
        promoConceptsSections[promoConceptsSections.length - 1].$el;
      var sectionHeight = promoConceptsLastSection.clientHeight;
      var afterWaveHeight = document.querySelector(
        ".promo-concepts-after-wave"
      ).clientHeight;

      this.$ScrollTrigger.create({
        trigger: promoConceptsLastSection,
        start: "top top",
        end: `${sectionHeight + afterWaveHeight - 2}px`,
        pin: teamSection,
        pinSpacing: false,
        onEnter: function (data) {
          var normalSection = data.pin.closest(".js-section-normal-scroll");
          normalSection.classList.remove("animation-finished");
          if (self.mySwiper) {
            self.mySwiper.slideTo(0, 0);
          }
          self.$gsap.set(data.pin, {
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
          });
        },
        onEnterBack: function (data) {
          self.$gsap.set(data.pin, {
            position: "fixed",
            top: 100,
            left: 0,
            width: "100%",
          });
        },
        onLeaveBack: function (data) {
          self.$gsap.set(data.pin, {
            position: "relative",
            top: 0,
            left: 0,
            width: "100%",
          });
        },
        onLeave: function (data) {
          var normalSection = data.pin.closest(".js-section-normal-scroll");
          setTimeout(() => {
            normalSection.classList.add("animation-finished");
            window.scrollTo({ top: window.scrollY + 100 });
          }, 100);
        },
      });
    }
  },
  methods: {
    onSliderInit(swiper) {
      var self = this;
      console.log(this.itemsLength);
      if (self.isDesktop) {
        this.$nextTick(() => {
          swiper.wrapperEl.classList.add("ease-linear");
          self.runInfiniteSlides(swiper);
          swiper.el.addEventListener("mousemove", self.onTeamSliderMove);
          swiper.el.addEventListener("mouseenter", self.onTeamSliderEnter);
          swiper.el.addEventListener("mouseleave", self.onTeamSliderLeave);
        }, 500);
      }
    },
    onTeamSliderEnter() {
      var self = this;
      if (this.mySwiper) {
        this.mySwiper.off("transitionEnd", self.onInfiniteSlideRepeat);
        var translate = this.mySwiper.getTranslate();
        this.mySwiper.setTransition(0);
        this.mySwiper.setTranslate(translate);
        this.mySwiper.updateProgress(translate);
        setTimeout(function () {
          self.mySwiper.setProgress(self.mySwiper.progress);
        }, 50);
      }
    },
    onTeamSliderMove(e) {
      var translate = this.mySwiper.getTranslate();

      var newHoveredSlide = e.target.closest(".swiper-slide");

      if (newHoveredSlide && this.hoveredSlide !== newHoveredSlide) {
        this.hoveredSlide = newHoveredSlide;

        var hoveredSlideIndex = this.hoveredSlide.dataset.swiperSlideIndex;
        var viewportOffset = this.hoveredSlide.getBoundingClientRect();
        var left = viewportOffset.left;

        // Если слайд еще не полностью в экране - игнорим
        if (left + 100 < 0) {
          return;
        } else if (
          left - 100 + this.hoveredSlide.clientWidth >=
          window.innerWidth
        ) {
          return;
        }

        this.mySwiper.off("transitionEnd");

        this.mySwiper.wrapperEl.classList.remove("ease-linear");

        this.mySwiper.params.speed = 1000;
        this.mySwiper.params.allowTouchMove = true;

        var hoveredSlidesWithDuplicates = this.mySwiper.slides.filter(function (
          item
        ) {
          return item.dataset.swiperSlideIndex == hoveredSlideIndex;
        });

        this.mySwiper.slides.forEach(function (item) {
          item.classList.remove("visible");
        });

        hoveredSlidesWithDuplicates.forEach(function (i) {
          i.classList.add("visible");
        });

        this.hoveredSlides = hoveredSlidesWithDuplicates;
      }
    },
    onTeamSliderLeave() {
      var translate = this.mySwiper.getTranslate();
      var maxTranslate = this.mySwiper.maxTranslate();
      var slidesGridIndex = this.mySwiper.slides.length - this.itemsLength;
      var translateVal = this.mySwiper.slidesGrid[slidesGridIndex];
      var customProgress = Math.abs(translate / translateVal);

      this.mySwiper.updateProgress(translate);
      this.mySwiper.params.speed = this.sliderSpeed;
      this.mySwiper.wrapperEl.classList.add("ease-linear");

      var newSpeed = (
        this.mySwiper.params.speed *
        (1 - customProgress)
      ).toFixed(0);

      this.mySwiper.translateTo(-translateVal, parseInt(newSpeed));
      this.mySwiper.once("transitionEnd", this.onInfiniteSlideRepeat);
      if (this.hoveredSlides && this.hoveredSlides.length > 0) {
        this.hoveredSlides.forEach(function (i) {
          i.classList.remove("visible");
        });
        this.hoveredSlides = [];
      }
      this.hoveredSlide = false;
    },
    onInfiniteSlideRepeat(swiper) {
      var self = this;
      self.mySwiper.slideTo(0, 0);
      setTimeout(function () {
        self.runInfiniteSlides(self.mySwiper);
      }, 0);
    },
    runInfiniteSlides(swiper) {
      var self = this;
      var speed = this.mySwiper.activeIndex !== 0 ? 4000 : this.sliderSpeed;
      var halfItems = Math.round(self.itemsLength / 2);
      this.mySwiper.slideTo(
        this.mySwiper.slides.length - self.itemsLength,
        speed,
        true
      );
      this.mySwiper.once("transitionEnd", self.onInfiniteSlideRepeat);
    },
  },
};
</script>

<style lang="scss">
.news__title {
  span {
    white-space: nowrap;
  }
}
.team {
  position: relative;
  z-index: 2;
  transform: none !important;
}

.js-section-normal-scroll.animation-finished {
  padding-top: 100px;
}

.team__slider {
  padding-bottom: 123px !important;
  position: relative;

  &:after {
    content: "";
    background: #f2f3f6;
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 123px;
  }
}

.team-top-pad {
  height: 170px;
}

.team__slide {
  width: 16.6666%;
  position: relative;
}

.team__title {
  color: $primary;
  font-weight: 700;
  font-size: 124px;
  margin-bottom: 50px;
  padding-top: 46px;
}

.team__img {
  transition: filter 0.7s;
  filter: grayscale(100%);
}

.team__img img {
  display: block;
  width: 125%;
  height: auto;
  max-width: none;
  cursor: pointer;
}

.team__slide-content {
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100px;
  position: absolute;
  width: 125%;
  bottom: -100px;
  opacity: 0;
  transform: translateY(40px);
  transition: opacity 0.7s, transform 0.7s;
  @media (max-width: 991px) {
    opacity: 1;
    transform: translateY(0);
  }
}

.team__slide.visible .team__slide-content {
  opacity: 1;
  transform: none;
}
.team__slide-name {
  white-space: nowrap;
  font-weight: 300;
  margin-bottom: 10px;

  @media (max-width: 991px) {
    white-space: normal;
    width: 180px;
    text-align: center;
  }
  @media (max-width: 840px) {
    width: 130px;

    font-size: 12px !important;
  }
  @media (max-width: 450px) {
    font-size: 11px !important;
  }
}

.team__slide-job {
  white-space: nowrap;
  font-size: 12px;
  font-weight: 300;
  @media (max-width: 991px) {
    white-space: normal;
    width: 180px;
  }
  @media (max-width: 840px) {
    width: 130px;
    font-size: 10px !important;
  }
  @media (max-width: 450px) {
    font-size: 9px !important;
  }
}

.team__slide.visible {
  position: relative;
}

// .team__slide.visible .team__slide-name,
// .team__slide.visible .team__slide-job {
//   opacity: 1;
//   transform: none;
// }

// .team__slide.visible .team__slide-name {
//   transition-delay: 0s;
// }

// .team__slide.visible .team__slide-job {
//   transition-delay: 0.2s;
// }

.team__slide.visible .team__img {
  filter: grayscale(0);
}

.team__slider .swiper-wrapper {
  &.ease-linear {
    -webkit-transition-timing-function: linear;
    -o-transition-timing-function: linear;
    transition-timing-function: linear;
  }

  &.normal-easing {
    -webkit-transition-timing-function: ease-out;
    -o-transition-timing-function: ease-out;
    transition-timing-function: ease-out;
  }
}

@include down("xl") {
  .team__title {
    font-size: 80px;
  }
}

@include down("lg") {
  .team {
    padding-top: 40px;
  }
  .team__title {
    font-size: 48px;
    padding-left: 10px;
    margin-bottom: 30px;
  }

  .team__slide {
    width: 30%;
    margin-right: 0;
  }
  .team__slide-content {
    height: 74px;
    bottom: -74px;
  }
  .team__slide-name {
    font-size: 14px;
    line-height: 1.2;
    margin-bottom: 6px;
  }
  .team__slide-job {
    font-size: 12px;
  }
  .team__slide.swiper-slide-active {
    .team__slide-name,
    .team__slide-job {
      opacity: 1;
      transform: none;
    }

    .team__img {
      filter: grayscale(0);
    }
  }

  .team__slider {
    padding-bottom: 74px !important;

    &:after {
      height: 74px;
    }
  }
}

@include down("md") {
  .team__title {
    padding-left: 0;
  }
}

@include down("sm") {
  .team__slide {
    -webkit-transform: translateZ(0);
    -webkit-backface-visibility: hidden;
  }
}
</style>
