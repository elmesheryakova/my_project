<template>
  <div
    class="footer-feedback"
    ref="elem"
    :class="{
      'footer-feedback--white':
        $route.name === 'products-slug-id' ||
        $route.name === 'accessories' ||
        $route.name === 'index' ||
        $route.name === 'contacts',
    }"
  >
    <!-- 'footer-feedback--animate': offsetTop < 0, -->
    <div
      :class="{
        'wave-wrap1': $route.name === 'solutions-id',
        'wrap-white': $route.name === 'company',
      }"
    >
      <img :src="require(`@/assets/img/top.png`)" alt="img" class="wave" width="1920" height="640" />
    </div>

    <div class="footer-feedback__wrap" ref="feedbackWrap">
      <div class="container d-flex justify-content-between">
        <h3 class="footer-feedback__title">
          Присоединяйтесь <br />
          <span> к сотрудничеству!</span>
        </h3>
        <FeedbackForm />
      </div>
    </div>
    <img :src="require(`@/assets/img/bottom.png`)" alt="img" class="wave" ref="afterWave" width="1920" height="640" />
  </div>
</template>
<script>
export default {
  props: {
    offsetTop: {
      type: Number,
    },
    elemHeight: {
      type: Number,
    },
    pos: {
      type: Number,
    },
    enableWaveAnimation: {
      type: Boolean,
      required: false,
    },
  },
  computed: {
    isDesktop() {
      return this.$mq === "xl" || this.$mq === "xl2";
    },
  },
  methods: {
    init() {
      console.log('initialized!');
      setTimeout(() => {

        this.feedbackElemState = 'before';

        this.elemHeight = this.$refs.elem.clientHeight;
        this.elemOffsetTop = this.$refs.elem.offsetTop;
        var style = getComputedStyle(document.documentElement);
        this.paddingFeedbackTop = style.getPropertyValue('--feedback-padding-top');
        this.paddingFeedbackBottom = style.getPropertyValue('--feedback-padding-bottom');
        this.isInsideSection = false;
        this.prevSection = this.$refs.elem.previousElementSibling;
        this.nextSection = document.querySelector('.footer');
        this.afterWaveHeight = this.$refs.afterWave.offsetHeight;
        this.windowHeight = window.innerHeight;
        this.initPrevSectionTimeline();
        this.initNextSectionTimeline();
        document.addEventListener('scroll', this.onOutsideScroll);
      }, 300);
    },
    initPrevSectionTimeline() {
      var prevSectionTimeline = this.$gsap.timeline();
      prevSectionTimeline.to(this.prevSection, {
        scrollTrigger: {
          trigger: this.prevSection,
          end: "+=200%",
          start: "bottom bottom",
          pin: true,
          pinSpacing: false,
          scrub: true,
        },
      });
    },
    initNextSectionTimeline() {
      var self = this;
      this.$ScrollTrigger.create({
        trigger: this.$refs.feedbackWrap,
        start: "bottom bottom",
        end: `+=${this.afterWaveHeight + this.windowHeight}px`,
        pin: this.nextSection,
        pinSpacing: false,
        onEnter: function (data) {
          console.log('pinned!');
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
            top: 0,
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
            x: 0,
            y: 0,
          });
        },
        onLeave: function (data) {
          self.$gsap.set(data.pin, {
            position: "relative",
            top: 0,
            left: 0,
            width: "100%",
            x: 0,
            y: 0,
          });
        },
      })},
    onOutsideScroll() {
      var self = this;

      var timeToAnimateDown = this.elemOffsetTop <
      window.scrollY + window.innerHeight;
      var timeToAnimateUp = (this.elemOffsetTop + this.elemHeight) >
        window.scrollY;
      if (timeToAnimateDown && this.feedbackElemState === 'before') {
        document.removeEventListener("scroll", this.onOutsideScroll);
        self.$gsap.to(window, {
          duration: 1,
          ease: "power2.inOut",
          scrollTo: {
            y: self.$refs.feedbackWrap,
            offsetY: -parseInt(self.paddingFeedbackTop) / 2
          },
          onComplete: function () {
            setTimeout(() => {
              document.addEventListener("scroll", self.onInsideScroll);
            }, 100);
          },
        });
      }
      if (timeToAnimateUp && this.feedbackElemState === 'after') {
        document.removeEventListener("scroll", this.onOutsideScroll);
        self.feedbackElemState = 'before';
        self.$gsap.to(window, {
          duration: 1,
          ease: "power2.inOut",
          scrollTo: {
            y: self.$refs.feedbackWrap,
            offsetY: -parseInt(self.paddingFeedbackTop) / 2
          },
          onComplete: function () {
            setTimeout(() => {
              document.addEventListener("scroll", self.onInsideScroll);
            }, 100);
          },
        });
      }
    },
    onInsideScroll() {
      var self = this;
      var timeToAnimateUp = (this.elemOffsetTop + this.afterWaveHeight) >
        window.scrollY;
      var timeToAnimateDown = (this.elemOffsetTop + this.elemHeight - this.afterWaveHeight) <
        (window.scrollY + window.innerHeight);
      if (timeToAnimateUp) {
        this.feedbackElemState = 'before';
        document.removeEventListener("scroll", this.onInsideScroll);
        document.querySelector('.header').classList.add('header--hidden');

        self.$gsap.to(window, {
          duration: 1,
          ease: "power2.inOut",
          scrollTo: {
            y: self.prevSection.parentNode,
            offsetY: -(self.prevSection.offsetHeight - window.innerHeight)
          },
          onComplete: function () {
            setTimeout(() => {
              document.addEventListener("scroll", self.onOutsideScroll);
            }, 100);
          },
        });
      } else if (timeToAnimateDown) {
        console.log('timeToAnimateDown');
        console.log(self.nextSection);
        this.feedbackElemState = 'after';
        document.removeEventListener("scroll", this.onInsideScroll);
        self.$gsap.to(window, {
          duration: 1,
          ease: "power2.inOut",
          scrollTo: {
            y: self.nextSection.parentNode,
          },
          onComplete: function () {
            setTimeout(() => {
              document.addEventListener("scroll", self.onOutsideScroll);
            }, 100);
          },
        });
      }
    },
  },
  mounted() {
    if (this.isDesktop && this.enableWaveAnimation) {
      window.addEventListener('load', this.init);
    }
  },
};
</script>
<style lang="scss">
.footer-feedback {
  min-width: 100vw;
  width: 100%;
  height: 100%;
  //background-color: #f2f3f6;
  transition: 0.8s ease-in-out;
  position: relative;

  &--animate {
    transform: translateY(-1600px);
    transition: 0.8s ease-in-out;
    z-index: 20;
    & + .footer-feedback__wrap {
      position: fixed;
      opacity: 1;
      visibility: visible;
      height: auto;
      transition: 0.8s ease-in-out 0.5s;
      z-index: 21;
    }
    @media (max-width: 1950px) {
      transform: translateY(-1350px);
    }

    @media (max-width: 1700px) {
      transform: translateY(-1200px);
    }
    @media (max-width: 1400px) {
      transform: translateY(-1000px);
    }
  }
  &--endAnimate {
    transform: translateY(-4000px);
    transition: 0.8s ease-in-out;

    & + .footer-feedback__wrap {
      opacity: 0;
      visibility: hidden;
      height: 0;
      transition: 0s ease-in-out;
    }
  }
  &__title {
    color: $white;
    font-weight: 600;
    font-size: 48px;
    padding-right: 50px;
    span {
      white-space: nowrap;
    }
    @media (max-width: 991px) {
      font-size: 40px;
    }
    @media (max-width: 860px) {
      font-size: 36px;
      padding-bottom: 40px;
      text-align: center;
      padding-right: 0;
    }
    @media (max-width: 640px) {
      text-align: left;
      margin-right: auto;
    }
    @media (max-width: 370px) {
      font-size: 32px;
      padding-bottom: 25px;
    }
  }
  .wave {
    width: 100%;
    height: auto;
    position: relative;
    z-index: 20;
    display: block;
  }
  .wave-wrap1 {
    @media (max-width: 870px) {
      background-color: #fff;
    }
  }
  .wrap-white {
    background-color: #fff;
  }
  &__wrap {
    position: relative;
    width: 100%;

    background-color: #1726c9;
    z-index: 21;
    padding: var(--feedback-padding-top) 0 var(--feedback-padding-bottom) 0;

    form {
      width: 100%;
    }
    @media (max-width: 860px) {
      padding: 120px 0;
      .container {
        flex-wrap: wrap;
        justify-content: center !important;
      }
    }
  }

  .waveicon {
    top: -700px;
  }
  &--white {
    .footer-feedback__wrap {
      background-color: #fff;
      padding-top: 160px;
      padding-bottom: 160px;
    }
    .footer-feedback__title {
      color: $primary;
      span {
        color: $black;
      }
    }
    .wave {
      display: none !important;
    }
    form {
      .form-control {
        background-color: #fff;
        border-color: $black;
        color: $black;
        &::placeholder {
          color: $black;
        }
        &:hover {
          &::placeholder {
            color: $black;
          }
        }
      }
      .form-group > div {
        svg {
          path {
            fill: $primary;
          }
        }
      }
      .custom-control-label {
        color: $black;
      }
    }
    .feedback-popup__submit {
      background-color: #fff;
      color: $primary;
      border-color: $primary;
    }
  }
}
</style>
