<template>
  <div
    class="concept"
    :class="{
      'concept--even': item.id % 2 === 0,
    }"
  >
    <div class="concept__info">
      <h2 class="concept__info-title">{{ item.name }}</h2>
      <p class="concept__info-text" v-html="item.description"></p>
      <svgicon :name="`num${item.id}`" />
    </div>

    <div class="concept__imgs">
      <nuxt-link
        class="concept__link"
        :to="{ name: 'concept-slug', params: { slug: item.slug } }"
      >
        <svgicon name="arrow-fullscreen" />
      </nuxt-link>
      <div
        v-for="(item, idx) in item.images"
        :key="idx"
        :class="`concept__img-${idx + 1}`"
      >
        <img :src="item" alt="img" />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    item: {
      type: Object,
      default: () => {},
    },
    width: {
      type: Number,
    },
  },
};
</script>
<style lang="scss">
.concept {
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 80px;
  padding-bottom: 140px;
  &--even {
    .concept__imgs {
      order: -1;
    }
    .concept__link {
      right: -80px;
      left: auto;
    }
    .concept__img-1 {
      margin-left: 0;
    }
    .concept__img-2 {
      margin-left: auto;
    }
    .concept__info {
      margin-right: auto;
    }
  }
  @media (max-width: 1400px) {
    gap: 0;
    &--even {
      .concept__info-text {
        padding-right: 0;
        padding-left: 70px;
      }
    }
  }
  @media (max-width: 950px) {
    &--even {
      .concept__link {
        right: -60px;
      }
    }
  }
  &__info {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-left: auto;
    position: relative;

    &-title {
      color: $primary;
      font-size: 64px;
      line-height: 64px;
      font-weight: 900;
      padding-bottom: 60px;
      position: relative;
      z-index: 2;
    }
    &-text {
      max-width: 600px;
      font-weight: 400;
      font-size: 24px;
      line-height: 28px;
      position: relative;
      z-index: 2;
    }
    svg {
      position: absolute;
      path {
        fill: $white;
      }
      z-index: 0;
      max-height: 600px;
      @media (max-width: 950px) {
        max-height: 500px;
      }
    }
    @media (max-width: 1400px) {
      padding: 0 20px;
      &-text {
        padding-right: 60px;
      }
    }
    @media (max-width: 1230px) {
      &-title {
        font-size: 55px;
        padding-bottom: 40px;
      }
      &-text {
        font-size: 20px;
      }
    }
    @media (max-width: 950px) {
      &-title {
        font-size: 45px;
      }
      &-text {
        font-size: 18px;
      }
    }
  }
  &__imgs {
    width: 100%;
    position: relative;

    img {
      width: 100%;
    }
  }
  &__img-1,
  &__img-2 {
    max-width: 690px;
  }
  &__img-1 {
    margin-left: auto;
  }
  &__link {
    width: 160px;
    height: 160px;
    background-color: $primary;
    border-radius: 50%;
    position: absolute;
    display: block;
    top: 50%;
    left: -80px;
    transform: translateY(-50%);
    svg {
      width: 47px;
      height: 47px;
      fill: transparent;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      z-index: 2;

      path {
        stroke: $white;
      }
    }
    @media (max-width: 950px) {
      width: 120px;
      height: 120px;
      left: -55px;
    }
  }
}
</style>
