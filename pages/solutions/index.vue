<template>
  <client-only v-if="width > 1300">
    <full-page :options="options" ref="fullpage">
      <Fullscroll :width="width" class="section-top">
        <Banner />
        <div class="sections-menu" @click="scrollToSlide">
          <svgicon name="arrow-blue" />
        </div>
      </Fullscroll>

      <Fullscroll :width="width">
        <Solution :items="solutions.items" />
      </Fullscroll>
      <Fullscroll :width="width"> <Footer /> </Fullscroll>
    </full-page>
  </client-only>
  <div v-else>
    <Banner />
    <SolutionMobile :items="solutions.items" />
    <Footer />
  </div>
</template>

<script>
export default {
  layout: "fullscreen",

  data() {
    return {
      width: 0,
      options: {
        css3: true,
        activeSection: 0,
        mouseWheelSensitivity: 30,
        navigation: false,
        responsiveWidth: 1300,
      },
      solutions: [],
    };
  },

  async asyncData({ $axios }) {
    const solutions = await $axios.$get(
      `https://api.petexpert.pro/v1/solutions/`
    );
    return { solutions };
  },
  methods: {
    updateWidth() {
      this.width = window.innerWidth;
    },
    scrollToSlide() {
      this.$refs.fullpage.api.moveTo(2);
    },
  },

  mounted() {
    window.addEventListener("resize", this.updateWidth);
    this.updateWidth();
    // this.$nextTick(() => {
    //   this.$nuxt.$loading.start();
    //   setTimeout(() => this.$nuxt.$loading.finish(), 2000);
    // });
  },
};
</script>
<style lang="scss">
.section {
  height: 100%;
  &-top {
    position: relative;
  }
}

.sections-menu {
  position: absolute;
  left: 50%;
  top: 80%;
  transform: translateX(-50%);
  width: 50px;
  height: 50px;
  z-index: 99999;

  cursor: pointer;
  svg {
    width: 100%;
    height: 100%;
    fill: transparent;
  }
  @media (max-width: 1300px) {
    display: none;
  }
}
</style>
