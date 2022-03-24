<template>
  <div class="company">
    <Banner />
    <CompanyBanner />
    <ConceptBanner />
    <CompanyStory :width="width" />
    <Feedback />
    <Footer />
  </div>
</template>
<script>
export default {
  layout: "fullscreen",
  data() {
    return {
      // concept: this.$store.state.concept,
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
.company {
  // background: #f2f3f6;
}
</style>
