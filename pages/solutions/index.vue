<template>
  <no-ssr v-if="width > 1400">
    <full-page :options="options" ref="fullpage">
      <Fullscroll :width="width" class="section-top">
        <SolutionBanner />
        <div class="sections-menu" @click="scrollToSlide">
          <svgicon name="arrow-blue" />
        </div>
      </Fullscroll>

      <Fullscroll :width="width">
        <Solution />
      </Fullscroll>
      <Fullscroll :width="width"> <Footer /> </Fullscroll>
    </full-page>
  </no-ssr>
  <div v-else>
    <SolutionBanner />
    <SolutionMobile />
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
        responsiveWidth: 1400,
      },
    };
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
  @media (max-width: 1400px) {
    display: none;
  }
}
</style>
