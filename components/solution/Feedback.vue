<template>
  <div
    class="footer-feedback"
    :class="{ 'footer-feedback--animate': offsetTop < -100 }"
  >
    <img :src="require(`@/assets/svg/wave.svg`)" alt="img" />

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
};
</script>
<style lang="scss">
.footer-feedback {
  position: relative;
  min-width: 100vw;
  width: 100%;
  min-height: 100vh;
  transform: translateY(150px);
  transition: 0.8s ease-in-out;
  &--animate {
    transform: translateY(-1600px);
    transition: 0.8s ease-in-out;
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
  img {
    width: 100%;
  }
  &__wrap {
    position: absolute;
    width: 100%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
}
</style>
