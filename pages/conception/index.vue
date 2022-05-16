<template>
  <div>
    <Banner />
    <template v-if="width > 860">
      <div
        v-for="(item, index) in page.items"
        :key="index"
        :style="'background: #f2f3f7'"
      >
        <ConceptItem :item="item" :width="width" />
      </div>
    </template>

    <Advantages :width="width" :items="page.items" v-else />
    <ConceptBanner />
    <Feedback :enableWaveAnimation="true" />
    <Footer />
  </div>
</template>
<script>
export default {
  layout: "fullscreen",
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
    };
  },
  async asyncData({ $axios }) {
    const page = await $axios.$get(
      `https://api.petexpert.pro/v1/pages/conception/`
    );

    return { page };
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
</style>

