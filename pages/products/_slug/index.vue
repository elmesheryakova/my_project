<template>
  <div class="container">
    <ProductPreview />
    <h1 class="pages__title">{{ item.name }}</h1>
    <ProductItem v-for="(item, idx) in productsId" :key="idx" :item="item" />
  </div>
</template>
<script>
export default {
  data() {
    return {
      // products: this.$store.state.products,
      productsId: this.$store.state.productsId,
      item: {},
      product: [],
    };
  },
  async fetch() {
    this.item = await fetch(
      `${process.env.API_URL}/v1/production/categories/${this.$route.params.slug}/`
    ).then((res) => res.json());
    this.product = await fetch(
      `${process.env.API_URL}/v1/production/items/`
    ).then((res) => res.json());
  },
};
</script>
<style lang="scss">
</style>
