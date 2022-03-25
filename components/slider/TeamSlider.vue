<template>
  <!-- START team -->
  <section class="team">
    <div class="container">
      <h2 class="team__title">Команда</h2>
    </div>
    <div class="team__slider swiper" v-swiper:mySwiper="swiperOption">
      <div class="swiper-wrapper">
        <!-- START team__slide -->
        <div class="swiper-slide team__slide">
          <div class="team__img"><img src="~assets/img/team1.png" width="412" height="618" alt="Павлова Мария Игоревна">
          </div>
          <div class="team__slide-content">
            <div class="team__slide-content-wrap">

              <div class="team__slide-name">Павлова Мария Игоревна</div>
              <div class="team__slide-job">Менеджер по продажам</div>

            </div>
          </div>
        </div>
        <!-- END team__slide -->
        <!-- START team__slide -->
        <div class="swiper-slide team__slide">
          <div class="team__img"><img src="~assets/img/team2.png" width="412" height="618" alt="Павлова Мария Игоревна">
          </div>
          <div class="team__slide-content">
            <div class="team__slide-content-wrap">
              <div class="team__slide-name">Павлова Мария Игоревна</div>
              <div class="team__slide-job">Менеджер по продажам</div>
            </div>
          </div>
        </div>
        <!-- END team__slide -->
        <!-- START team__slide -->
        <div class="swiper-slide team__slide">
          <div class="team__img"><img src="~assets/img/team3.png" width="412" height="618" alt="Павлова Мария Игоревна">
          </div>
          <div class="team__slide-content">
            <div class="team__slide-content-wrap">
              <div class="team__slide-name">Павлова Мария Игоревна</div>
              <div class="team__slide-job">Менеджер по продажам</div>
            </div>
          </div>
        </div>
        <!-- END team__slide -->
        <!-- START team__slide -->
        <div class="swiper-slide team__slide">
          <div class="team__img"><img src="~assets/img/team4.png" width="412" height="618" alt="Павлова Мария Игоревна">
          </div>
          <div class="team__slide-content">
            <div class="team__slide-content-wrap">
              <div class="team__slide-name">Павлова Мария Игоревна</div>
              <div class="team__slide-job">Менеджер по продажам</div>
            </div>
          </div>
        </div>
        <!-- END team__slide -->
        <!-- START team__slide -->
        <div class="swiper-slide team__slide">
          <div class="team__img"><img src="~assets/img/team5.png" width="412" height="618" alt="Павлова Мария Игоревна">
          </div>
          <div class="team__slide-content">
            <div class="team__slide-content-wrap">
              <div class="team__slide-name">Павлова Мария Игоревна</div>
              <div class="team__slide-job">Менеджер по продажам</div>
            </div>
          </div>
        </div>
        <!-- END team__slide -->
        <!-- START team__slide -->
        <div class="swiper-slide team__slide">
          <div class="team__img"><img src="~assets/img/team6.png" width="412" height="618" alt="Павлова Мария Игоревна">
          </div>
          <div class="team__slide-content">
            <div class="team__slide-content-wrap">
              <div class="team__slide-name">Павлова Мария Игоревна</div>
              <div class="team__slide-job">Менеджер по продажам</div>
            </div>
          </div>
        </div>
        <!-- END team__slide -->
      </div>
    </div>

  </section>
  <!-- END team -->
</template>

<script>
import {directive} from "vue-awesome-swiper";

export default {
  name: "TeamSlider",
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
          init: function (swiper) {
            console.log(swiper);
          },
        },
        breakpoints: {
          360: {
            slidesPerView: 3,
          },
          600: {
            slidesPerView: 5
          },
          992: {
            centeredSlides: false,
            slidesPerView: 6,
            autoplay: false,
            speed: 20000,
            allowTouchMove: true,
            slideToClickedSlide: false,
            freeModeMomentum: false,
            watchSlidesVisibility: false,
            watchSlidesProgress: true,
          },
        },
      }
    }
  },
  props: {
    pinSection: Boolean,
    directives: {
      swiper: directive,
    },
  },
  mounted() {
    var teamSection = this.$el;
    this.isDesktop = this.$mq === 'xl' || this.$mq === 'xl2';
    this.isTablet = this.$mq === 'lg' || this.$mq === 'md';

    if (this.isDesktop && this.pinSection) {
      var promoConceptsSections = this.$parent.$refs.promoConcepts;

      // Пропускаем элемент волны, получаем последнюю концепцию
      var promoConceptsLastSection = promoConceptsSections[promoConceptsSections.length - 1].$el;

      this.$ScrollTrigger.create({
        trigger: promoConceptsLastSection,
        start: 'top top',
        endTrigger: teamSection,
        end: 'top top',
        pin: teamSection,
        pinSpacing: false,
        onEnter: function (data) {
          gsap.set(data.pin, {position: 'fixed', top: 0, left: 0, width: '100%'});
        },
        onEnterBack: function (data) {
          gsap.set(data.pin, {position: 'fixed', top: 0, left: 0, width: '100%'});
        },
        onLeaveBack: function (data) {
          gsap.set(data.pin, {position: 'relative', top: 0, left: 0, width: '100%'});
        },
        onLeave: function (data) {
          gsap.set(data.pin, {position: 'relative', top: 0, left: 0, width: '100%'});
        }
      });
    }
    // console.log(this.$awesomeSwiper);

    // Слайдер для секции "Команда"
    var teamSlides = document.querySelectorAll('.team__slide');

    this.sliderSpeed = 20000;
    this.hoveredSlide = null;
    this.hoveredSlides = [];
    // this.swiper = new Swiper('.team__slider', {});
  },
  methods: {
    onSliderInit(swiper, z) {
      console.log('onSliderInit');
      console.log(swiper);
      console.log(z);
      console.log(this.mySwiper);
      var self = this;
      if (self.isDesktop) {
        setTimeout(function () {
          swiper.wrapperEl.classList.add('ease-linear');
          self.runInfiniteSlides(swiper);
          // self.swiper.el.addEventListener('mousemove', self.onTeamSliderMove);
          // self.swiper.el.addEventListener('mouseenter', self.onTeamSliderEnter);
          // self.swiper.el.addEventListener('mouseleave', self.onTeamSliderLeave);
        }, 500);
      }
    },
    onTeamSliderEnter() {
      var self = this;
      if (this.swiper) {
        this.swiper.off('transitionEnd', onInfiniteSlideRepeat);
        var translate = this.swiper.getTranslate();
        this.swiper.setTransition(0);
        this.swiper.setTranslate(translate);
        this.swiper.updateProgress(translate);
        setTimeout(function () {
          this.swiper.setProgress(self.swiper.progress);
        }, 50);
      }
    },
    onTeamSliderMove(e) {
      var translate = this.swiper.getTranslate();

      var newHoveredSlide = e.target.closest('.swiper-slide');

      if (newHoveredSlide && this.hoveredSlide !== newHoveredSlide) {
        this.hoveredSlide = newHoveredSlide;

        var hoveredSlideIndex = this.hoveredSlide.dataset.swiperSlideIndex;
        var viewportOffset = this.hoveredSlide.getBoundingClientRect();
        var left = viewportOffset.left;

        // Если слайд еще не полностью в экране - игнорим
        if (left + 100 < 0) {
          return;
        } else if ((left - 100 + this.hoveredSlide.clientWidth) >= window.innerWidth) {
          return;
        }

        this.swiper.off('transitionEnd');

        this.swiper.wrapperEl.classList.remove('ease-linear');

        this.swiper.params.speed = 1000;
        this.swiper.params.allowTouchMove = true;

        var hoveredSlidesWithDuplicates = this.swiper.slides.filter(function (item) {
          return item.dataset.swiperSlideIndex == hoveredSlideIndex;
        });

        this.swiper.slides.forEach(function (item) {
          item.classList.remove('visible');
        });

        hoveredSlidesWithDuplicates.forEach(function (i) {
          i.classList.add('visible');
        });

        this.hoveredSlides = hoveredSlidesWithDuplicates;
      }
    },
    onTeamSliderLeave() {
      var translate = this.swiper.getTranslate();
      var maxTranslate = this.swiper.maxTranslate();

      this.swiper.updateProgress(translate);
      this.swiper.params.speed = this.sliderSpeed;
      this.swiper.wrapperEl.classList.add('ease-linear');

      var newSpeed = (this.swiper.params.speed * (1 - this.swiper.progress)).toFixed(0);

      this.swiper.translateTo(maxTranslate, parseInt(newSpeed));
      this.swiper.once('transitionEnd', onInfiniteSlideRepeat);
      if (this.hoveredSlides && this.hoveredSlides.length > 0) {
        this.hoveredSlides.forEach(function (i) {
          i.classList.remove('visible');
        });
        this.hoveredSlides = [];
      }
      this.hoveredSlide = false;
    },
    onInfiniteSlideRepeat(swiper) {
      var self = this;
      swiper.slideTo(0, 0);
      setTimeout(function () {
        self.teamInfiniteSlides(swiper);
      }, 0);
    },
    runInfiniteSlides(swiper) {
      console.log('run infiniteslides!');
      var speed = swiper.activeIndex !== 0 ? 12000 : this.sliderSpeed;
      swiper.slideTo(swiper.slides.length, speed);
      swiper.once('transitionEnd', this.runInfiniteSlides(swiper));
    },
  },
}
</script>

<style lang="scss">

.team {
  position: relative;
  z-index: 2;
  transform: none !important;
  padding-top: 0;
  padding-bottom: 123px;

  &:after {
    content: '';
    background: #F2F3F6;
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
}

.team__img {
  transition: filter 0.7s;
  filter: grayscale(100%);
}

.team__img img {
  display: block;
  width: 100%;
  height: auto;
  max-width: none;
}

.team__slide-content {
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 123px;
  position: absolute;
  width: 100%;
  bottom: -123px;
}

.team__slide-name {
  white-space: nowrap;
  font-weight: 300;
  margin-bottom: 10px;
  opacity: 0;
  transition: opacity 0.7s, transform 0.7s;
  transform: translateY(30px);
}

.team__slide-job {
  white-space: nowrap;
  font-size: 12px;
  font-weight: 300;
  opacity: 0;
  transform: translateY(10px);
  transition: opacity 0.7s, transform 0.7s;
}

.team__slide.visible {
  position: relative;
}

.team__slide.visible .team__slide-name, .team__slide.visible .team__slide-job {
  opacity: 1;
  transform: none;
}

.team__slide.visible .team__slide-name {
  transition-delay: 0s;
}

.team__slide.visible .team__slide-job {
  transition-delay: 0.2s;
}

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

@include down('xl') {
  .team {
    padding-top: 100px;
  }
  .team__title {
    font-size: 80px;
  }
}

@include down('lg') {
  .team {
    padding-top: 74px;
  }
  .team__title {
    font-size: 48px;
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
    .team__slide-name, .team__slide-job {
      opacity: 1;
      transform: none;
    }

    .team__img {
      filter: grayscale(0);
    }
  }

  .team {
    padding-bottom: 74px;

    &:after {
      height: 74px;
    }
  }
}

@include down('md') {
}

@include down('sm') {
  .team {
    padding-top: 40px;
  }
}

</style>
