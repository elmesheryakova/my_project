<template>
  <section>
    <section class="fullpage" :class="{ 'fullpage--none': width < 1400 }">
      <SectionBanner />
      <div class="sections-menu" @click="scrollToSection(2)">
        <svgicon name="arrow-fullscreen" />
      </div>
    </section>
    <section class="fullpage" :class="{ 'fullpage--none': width < 1400 }">
      <SectionSolution />
    </section>
    <section class="fullpage" :class="{ 'fullpage--none': width < 1400 }">
      <Footer />
    </section>
  </section>
</template>
<script>
export default {
  scrollToTop: true,
  transition: "route",
  layout: "fullscreen",

  data() {
    return {
      inMove: false,
      activeSection: 0,
      offsets: [],
      touchStartY: 0,
      width: 0,
    };
  },

  methods: {
    updateWidth() {
      this.width = window.innerWidth;
    },
    calculateSectionOffsets() {
      let sections = document.getElementsByTagName("section");
      let length = sections.length;

      for (let i = 0; i < length; i++) {
        let sectionOffset = sections[i].offsetTop;
        this.offsets.push(sectionOffset);
      }
    },
    handleMouseWheel: function (e) {
      if (e.wheelDelta < 30 && !this.inMove) {
        if (this.activeSection < this.offsets.length - 1) {
          this.moveUp();
        }
      } else if (e.wheelDelta > 30 && !this.inMove) {
        if (this.activeSection > 0) {
          this.moveDown();
        }
      }
      if (this.width > 1400 && this.$device.isDesktop) {
        e.preventDefault();
      }

      return false;
    },
    handleMouseWheelDOM: function (e) {
      if (e.detail > 0 && !this.inMove) {
        this.moveUp();
      } else if (e.detail < 0 && !this.inMove) {
        this.moveDown();
      }

      return false;
    },
    moveDown() {
      this.inMove = true;
      this.activeSection--;

      if (this.activeSection < 0) this.activeSection = this.offsets.length - 1;

      this.scrollToSection(this.activeSection, true);
    },
    moveUp() {
      this.inMove = true;
      this.activeSection++;

      if (this.activeSection > this.offsets.length - 1) this.activeSection = 0;

      this.scrollToSection(this.activeSection, true);
    },
    scrollToSection(id, force = false) {
      if (this.inMove && !force) return false;

      this.activeSection = id;
      this.inMove = true;

      document
        .getElementsByTagName("section")
        [id].scrollIntoView({ behavior: "smooth" });

      setTimeout(() => {
        this.inMove = false;
      }, 400);
    },
  },
  created() {
    if (process.client) {
      this.calculateSectionOffsets();
      window.addEventListener("resize", this.updateWidth);
      window.addEventListener("DOMMouseScroll", this.handleMouseWheelDOM);
      window.addEventListener("mousewheel", this.handleMouseWheel, {
        passive: false,
      });
    }
  },
  destroyed() {
    if (process.client) {
      window.removeEventListener("mousewheel", this.handleMouseWheel, {
        passive: false,
      });
      window.removeEventListener("DOMMouseScroll", this.handleMouseWheelDOM);
    }
  },
  mounted() {
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
.sections-menu {
  position: absolute;
  left: 50%;
  top: 80%;
  transform: translateX(-50%);
  width: 50px;
  height: 50px;

  cursor: pointer;
  svg {
    width: 100%;
    height: 100%;
    fill: transparent;
    transform: rotate(90deg);
  }
  @media (max-width: 1400px) {
    display: none;
  }
}
</style>
