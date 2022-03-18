<template>
  <div>
    <Banner />
    <template v-if="width > 860">
      <div
        v-for="(item, index) in concept"
        :key="index"
        :style="'background: #f2f3f7'"
      >
        <ConceptItem :item="item" :width="width" />
      </div>
    </template>

    <Advantages :width="width" :items="concept" v-else />
    <ConceptBanner />
    <Feedback />
    <Footer />
  </div>
</template>
<script>
export default {
  layout: "fullscreen",
  data() {
    return {
      concept: this.$store.state.concept,
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
</style>

