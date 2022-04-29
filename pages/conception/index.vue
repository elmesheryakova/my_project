<template>
  <div>
    <Banner />
    <template v-if="width > 860">
      <div
        v-for="(item, index) in conception.items"
        :key="index"
        :style="'background: #f2f3f7'"
      >
        <ConceptItem :item="item" :width="width" />
      </div>
    </template>

    <Advantages :width="width" :items="conception.items" v-else />
    <ConceptBanner />
    <Feedback :enableWaveAnimation="true" />
    <Footer />
  </div>
</template>
<script>
export default {
  layout: "fullscreen",
  data() {
    return {
      width: 0,
      conception: [],
    };
  },
  async asyncData({ $axios }) {
    const conception = await $axios.$get(
      `https://api.petexpert.pro/v1/conception/`
    );
    return { conception };
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

