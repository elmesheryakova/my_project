<template>
  <div class="accessories">
    <div class="container">
      <ProductPreview />
      <h1 class="pages__title">{{ page.name }}</h1>
    </div>
    <Advantages :width="width" :items="access.items" />
    <Feedback />
  </div>
</template>
<script>
export default {
  head() {
    return {
      title: this.page.seo.seo_title,
      description: this.page.seo.seo_description,
    };
  },
  data() {
    return {
      width: 0,
      page: [],
      access: [],
    };
  },
  async asyncData({ $axios, params }) {
    const page = await $axios.$get(
      `https://api.petexpert.pro/v1/production/categories/accessories/`
    );
    const access = await $axios.$get(
      `https://api.petexpert.pro/v1/production/items/?categories__slug=accessories`
    );
    return { access, page };
  },

  methods: {
    updateWidth() {
      this.width = window.innerWidth;
    },
  },

  mounted() {
    window.addEventListener("resize", this.updateWidth);

    this.updateWidth();
    this.access.items.forEach((el, i) => {
      this.$set(el, "index", i + 1);
    });
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
