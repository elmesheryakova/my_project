<template>
  <no-ssr>
    <full-page :options="options">
      <div id="section">
        <Fullscroll :width="width" class="section-top">
          <Header />
          <SolutionBanner />
          <div class="sections-menu" @click="scrollToSlide">
            <svgicon name="arrow-blue" />
          </div>
        </Fullscroll>

        <Fullscroll :style="'background: #fff'">
          <Solution v-if="width > 870" />
          <SolutionMobile v-else />
        </Fullscroll>
        <Fullscroll> <Footer /> </Fullscroll>
      </div>
    </full-page>
  </no-ssr>
</template>
<script>
export default {
  layout: "fullscreen",

  data() {
    return {
      width: 0,
      options: {
        activeSection: 0,
        mouseWheelSensitivity: 30,
        showIndicators: false,
      },
    };
  },

  methods: {
    updateWidth() {
      this.width = window.innerWidth;
    },

    scrollToSlide() {
      this.$refs.fullpage.scrollToSection(1);
    },
  },

  mounted() {
    window.addEventListener("resize", this.updateWidth);
    this.updateWidth();
  },
};
</script>
<style lang="scss">
.fullpage {
  height: 100vh;
  width: 100%;
  &--none {
    height: 100%;
  }
}
.section {
  height: 100vh;
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
