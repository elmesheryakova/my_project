<template>
  <div class="company">
    <Banner />
    <CompanyBanner />
    <ConceptBanner />
    <CompanyStory :width="width" :items="page.history" />
    <CompanyConcept :items="page.conceptions" v-if="width > 680" />
    <template v-else>
      <div class="company-concept__title">
        <h2 class="company__concept-title">
          Концепция <br />
          <span>компании</span>
        </h2>
        <nuxt-link class="advantages__item-link" :to="{ name: 'conception' }">
          <p class="mb-0">Узнайте более подробно</p>
          <svgicon name="arrow-blue" />
        </nuxt-link>
      </div>
      <SolutionMobile :items="page.conceptions" />
    </template>
    <SliderTeamSlider />
    <News :width="width" :items="page.news" />
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
      page: {},
    };
  },
  async asyncData({ $axios }) {
    const page = await $axios.$get(
      `https://api.petexpert.pro/v1/pages/about_company/`
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
