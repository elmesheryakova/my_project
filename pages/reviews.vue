<template>
  <div class="reviews">
    <div class="container">
      <h1 class="pages__title">Партнеры и отзывы</h1>
      <SliderPartnersSlider :items="page" />
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      page: {},
    };
  },
  async asyncData({ $axios }) {
    const page = await $axios.$get(
      `https://api.petexpert.pro/v1/company/reviews/`
    );
    return { page };
  },
};
</script>
<style lang="scss">
.reviews {
  .partners__title {
    display: none;
  }
  .partners__slider-next,
  .partners {
    background: #f2f3f7;
  }
  .pages__title {
    padding-bottom: 30px;
  }
}
</style>
