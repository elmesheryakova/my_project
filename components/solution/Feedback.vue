<template>
  <div class="wrap">
    <div
      class="footer-feedback"
      :class="{ 'footer-feedback--animate': offsetTop < 0 }"
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
  },
  methods: {},
  mounted() {},
};
</script>
<style lang="scss">
.wrap {
  height: 100vh;
  position: relative;
}
.footer-feedback {
  position: absolute;
  min-width: 100vw;
  width: 100%;

  transform: translateY(150px);
  transition: 0.8s ease-in-out;
  &--animate {
    transform: translateY(-1500px);
    transition: 0.8s ease-in-out;
    & + .footer-feedback__wrap {
      position: fixed;
      opacity: 1;
      visibility: visible;

      transition: 0.8s ease-in-out 0.5s;
    }
    @media (max-width: 1950px) {
      transform: translateY(-1400px);
    }
    @media (max-width: 1700px) {
      transform: translateY(-1250px);
    }
    @media (max-width: 1500px) {
      transform: translateY(-1100px);
    }
    @media (max-width: 1400px) {
      transform: translateY(-1000px);
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
    position: absolute;
    width: 100%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    opacity: 0;
    visibility: hidden;
  }
}
</style>
