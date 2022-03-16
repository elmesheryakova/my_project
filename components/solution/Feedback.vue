<template>
  <div
    class="wrap"
    :class="{
      'wrap--endAnimate': offsetTop < -300,
    }"
  >
    <div
      class="footer-feedback"
      :class="{
        'footer-feedback--animate': offsetTop < 0,
        'footer-feedback--endAnimate': offsetTop < -300,
      }"
    >
      <img :src="require(`@/assets/svg/wave.svg`)" alt="img" class="wave" />
    </div>
    <div class="footer-feedback__wrap">
      <div class="container d-flex justify-content-between">
        <h3 class="footer-feedback__title">
          Присоединяйтесь <br />
          к сотрудничеству!
        </h3>
        <FeedbackForm />
      </div>
    </div>
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
  },
  methods: {},
  mounted() {},
};
</script>
<style lang="scss">
.wrap {
  height: 100vh;
  position: relative;
  transition: 0.8s ease-in-out 0.5s;
  &--endAnimate {
    height: 0;
    transition: 1s ease-in-out;
  }
}
.footer-feedback {
  position: absolute;
  min-width: 100vw;
  width: 100%;

  transform: translateY(150px);
  transition: 0.8s ease-in-out;
  &--animate {
    transform: translateY(-1600px);
    transition: 0.8s ease-in-out;
    & + .footer-feedback__wrap {
      position: fixed;
      opacity: 1;
      visibility: visible;
      height: auto;
      transition: 0.8s ease-in-out 0.5s;
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
      // top: 50%;
      // left: 50%;
      // transform: translate(-50%, -50%);
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
  }
  .wave {
    width: 100%;
    position: relative;
  }
  &__wrap {
    position: fixed;
    width: 100%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    opacity: 0;
    visibility: hidden;
    height: 0;
  }
}
</style>
