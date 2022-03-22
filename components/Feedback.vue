<template>
  <div
    class="footer-feedback"
    :class="{ 'footer-feedback--products': $route.name === 'products-slug-id' }"
  >
    <div :class="{ 'wave-wrap1': $route.name === 'solutions-id' }">
      <img :src="require(`@/assets/img/top.png`)" alt="img" class="wave" />
    </div>

    <div class="footer-feedback__wrap">
      <div class="container d-flex justify-content-between">
        <h3 class="footer-feedback__title">
          Присоединяйтесь <br />
          <span> к сотрудничеству!</span>
        </h3>
        <FeedbackForm />
      </div>
    </div>
    <img :src="require(`@/assets/img/bottom.png`)" alt="img" class="wave" />
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
.footer-feedback {
  min-width: 100vw;
  width: 100%;
  height: 100%;
  background-color: #f2f3f6;
  // transition: 0.8s ease-in-out;
  position: relative;
  &--products {
    .footer-feedback__wrap {
      background-color: #fff;
    }
    .footer-feedback__title {
      color: $primary;
      span {
        color: $black;
      }
    }
    .wave {
      display: none;
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
    position: relative;
    z-index: 20;
  }
  .wave-wrap1 {
    @media (max-width: 870px) {
      background-color: #fff;
    }
  }
  &__wrap {
    position: relative;
    width: 100%;

    background-color: #1726c9;
    z-index: 21;
    padding: 180px 0;

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
}
</style>
