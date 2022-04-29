<template>
  <div class="fullscreen-banner__wrap">
    <Header />
    <div class="fullscreen-banner" v-if="$route.name === 'solutions'">
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
    <div
      class="fullscreen-banner fullscreen-banner--partners"
      v-if="$route.name === 'partners'"
    >
      <div>
        <picture class="fullscreen-banner__img">
          <source
            :srcset="require('@/assets/img/banner-partners640.jpg')"
            type="image/png"
            media="(max-width: 640px)"
          />
          <img :src="require('@/assets/img/banner-partners.jpg')" alt="bg" />
        </picture>
      </div>
      <h1 class="fullscreen-banner__title">Партнерам</h1>
    </div>
    <div
      class="fullscreen-banner fullscreen-banner--partners"
      v-if="$route.name === 'conception'"
    >
      <div>
        <picture class="fullscreen-banner__img">
          <source
            :srcset="require('@/assets/img/concept-640.jpg')"
            type="image/png"
            media="(max-width: 640px)"
          />
          <img :src="require('@/assets/img/concept.jpg')" alt="bg" />
        </picture>
      </div>

      <h1 class="fullscreen-banner__title text-center">
        Концепция <br />
        компании
      </h1>
    </div>
    <div class="fullscreen-banner" v-if="$route.name === 'company'">
      <div>
        <picture class="fullscreen-banner__img">
          <source
            :srcset="require('@/assets/img/company640.jpg')"
            type="image/png"
            media="(max-width: 640px)"
          />
          <img :src="require('@/assets/img/company.jpg')" alt="bg" />
        </picture>
      </div>

      <h1 class="fullscreen-banner__title text-center">О компании</h1>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    width: {
      type: Number,
    },
  },
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
  .header {
    position: fixed;
  }
}
.fullscreen-banner {
  background: #f2f3f7 url("~assets/img/2fon.png") center no-repeat;
  position: relative;
  z-index: -1;
  height: 100vh;
  &--partners {
    @media (max-width: 860px) {
      min-height: 300px;
      & > div {
        display: none;
      }
    }
    @media (max-width: 550px) {
      min-height: 250px;
    }
  }
  &__img {
    display: flex;
    flex: 0 0 50%;
    justify-content: flex-end;
    img {
      height: 100vh;
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
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-weight: 900;
    font-size: 124px;
    line-height: 145px;
    color: $primary;
    white-space: nowrap;
    @media (max-width: 1400px) {
      font-size: 100px;
      line-height: 100px;
    }
    @media (max-width: 991px) {
      font-size: 60px;
      line-height: 60px;
    }
    @media (max-width: 640px) {
      white-space: normal;
      font-size: 40px;
      line-height: 40px;

      text-align: center;
    }
  }
  @media (max-width: 991px) {
    padding-top: 90px;
    height: 100%;
    img {
      height: 100%;
    }
  }
  @media (max-width: 791px) {
    padding-top: 60px;
  }
}
</style>
