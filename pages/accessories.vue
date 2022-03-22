<template>
  <div class="accessories">
    <div class="container">
      <ProductPreview />
      <h1 class="pages__title">Комплектующие</h1>
    </div>
    <Advantages :width="width" :items="accessories" />
  </div>
</template>
<script>
export default {
  data() {
    return {
      accessories: this.$store.state.accessories,
      width: 0,
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
<style lang="scss">
.accessories {
  @media (max-width: 700px) {
    .pages__title {
      padding-top: 80px;
    }
  }
}
</style>
