<template>
  <div class="accessories">
    <div class="container">
      <ProductPreview />
      <h1 class="pages__title">Комплектующие</h1>
    </div>
    <Advantages :width="width" :items="access" />
    <Feedback />
  </div>
</template>
<script>
export default {
  data() {
    return {
      width: 0,

      access: [],
    };
  },
  async fetch() {
    const { data } = await this.$axios.get(
      `https://api.petexpert.pro/v1/production/items/?categories__slug=accessories`
    );
    this.access = data.items;
    this.access.forEach((el, i) => {
      this.$set(el, "index", i + 1);
    });
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
