<template>
  <div class="container">
    <ProductPreview :items="products" />
    <h1 class="pages__title">ПЭТ-кеги</h1>
    <ProductItem v-for="(item, idx) in productsId" :key="idx" :item="item" />
  </div>
</template>
<script>
export default {
  data() {
    return {
      products: this.$store.state.products,
      productsId: this.$store.state.productsId,
    };
  },
};
</script>
<style lang="scss">
</style>
