<template>
 <div class="reviews">
  <h1 class="pages__title">{{ pages.header }}</h1>
  <SliderPartnersSlider :items="page.items" />
 </div>
</template>
<script>
export default {
 head() {
  return {
   title: this.pages.seo.seo_title,
   meta: [
    {
     hid: `${this.pages.id}-description`,
     name: "description",
     content: this.pages.seo.seo_description,
    },
   ],
  };
 },
 data() {
  return {
   page: {},
   pages: [],
  };
 },
 async asyncData({ $axios }) {
  const pages = await $axios.$get(
   `https://api.petexpert.pro/v1/pages/partners_reviews/`
  );
  const page = await $axios.$get(
   `https://api.petexpert.pro/v1/company/reviews/`
  );
  return { page, pages };
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
