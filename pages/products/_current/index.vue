<template>
  <div class="container">
    <ProductPreview />
    <h1 class="pages__title" v-if="this.$route.params.current !== 'flacons'">
      {{ productCurrent.name }}
    </h1>
    <ProductItem
      v-for="(item, idx) in product"
      :key="idx"
      :item="item"
      :slug="productCurrent.slug"
    />
    <ProductIsDev v-if="this.$route.params.current === 'flacons'" />
  </div>
</template>
<script>
export default {
  data() {
    return {
      productCurrent: {},
      product: [],
    };
  },

  async fetch() {
    this.productCurrent = await fetch(
      `https://api.petexpert.pro/v1/production/categories/${this.$route.params.current}/`
    ).then((res) => res.json());
    const { data } = await this.$axios.get(
      `https://api.petexpert.pro/v1/production/items/?categories__slug=${this.productCurrent.slug}`
    );
    this.product = data.items;
  },
};
</script>
<style lang="scss">
</style>
