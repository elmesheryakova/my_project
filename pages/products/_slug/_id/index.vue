<template>
  <div>
    <div class="container">
      <ProductPreview />
      <h1 class="pages__title">ПЭТ-кег 35 л.</h1>
      <ProductInfo :items="productsId" />
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      width: 0,
      productsId: this.$store.state.productsId,
      productsGroup: this.$store.state.productsGroup,
    };
  },
  methods: {
    updateWidth() {
      this.width = window.innerWidth;
    },
  },
  mounted() {
    window.addEventListener("resize", this.updateWidth);
    this.updateWidth();
  },
};
</script>
