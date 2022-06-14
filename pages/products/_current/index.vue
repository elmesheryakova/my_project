<template>
 <div class="container">
  <ProductPreview />
  <h1 class="pages__title" v-if="this.$route.params.current !== 'flacons'">
   {{ productCurrent.name }}
  </h1>
  <ProductItem
   v-for="(item, idx) in product.items"
   :key="idx"
   :item="item"
   :slug="productCurrent.slug"
  />
  <ProductIsDev v-if="this.$route.params.current === 'flacons'" />
 </div>
</template>
<script>
export default {
 head() {
  return {
   title: this.productCurrent.seo.seo_title,

   meta: [
    {
     hid: `${this.productCurrent.id}-description`,
     name: "description",
     content: this.productCurrent.seo.seo_description,
    },
   ],
  };
 },
 data() {
  return {
   productCurrent: {},
   product: [],
  };
 },
 async asyncData({ $axios, params }) {
  const productCurrent = await $axios.$get(
   `https://api.petexpert.pro/v1/production/categories/${params.current}/`
  );
  const product = await $axios.$get(
   `https://api.petexpert.pro/v1/production/items/?categories__slug=${productCurrent.slug}`
  );
  return { productCurrent, product };
 },
};
</script>
<style lang="scss">
</style>
