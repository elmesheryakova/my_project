<template>
  <div class="fullscreen-banner__wrap">
    <Header />
    <div class="fullscreen-banner">
      <div>
        <picture class="fullscreen-banner__img">
          <source
            :srcset="require('@/assets/img/2-640.jpg')"
            type="image/png"
            media="(max-width: 640px)"
          />
          <img :src="require('@/assets/img/2.jpg')" alt="bg" />
        </picture>
      </div>
      <h1 class="fullscreen-banner__title">Готовые решения</h1>
    </div>
  </div>
</template>
<script>
export default {
  props: {},
  data() {
    return {};
  },
};
</script>
<style lang="scss">
.fullscreen-banner__wrap {
  height: 100vh;
  @media (max-width: 1300px) {
    height: 100%;
  }
}
.fullscreen-banner {
  background: #f2f3f7 url("~assets/img/2fon.png") center no-repeat;
  position: relative;
  z-index: -1;

  &__img {
    display: flex;
    flex: 0 0 50%;
    justify-content: flex-end;
    img {
      height: 100%;
      width: 50%;
      object-fit: cover;
    }

    @media (max-width: 640px) {
      flex: 0 0 100%;
      img {
        width: 100%;
      }
    }
  }
  &__title {
    position: absolute;
    top: 30%;
    left: 50%;
    transform: translateX(-50%);
    font-weight: 900;
    font-size: 124px;
    line-height: 145px;
    color: $primary;
    white-space: nowrap;
    @media (max-width: 1400px) {
      font-size: 100px;
    }
    @media (max-width: 991px) {
      font-size: 60px;
    }
    @media (max-width: 640px) {
      white-space: normal;
      font-size: 48px;
      line-height: 53px;
      text-align: center;
    }
    @media (max-width: 700px) {
      top: 20%;
    }
    @media (max-width: 640px) {
      top: 35%;
    }

    @media (max-width: 470px) {
      top: 30%;
    }
    @media (max-width: 370px) {
      top: 25%;
    }
  }
}
</style>
