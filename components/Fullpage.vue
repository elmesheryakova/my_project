<template>
  <section class="fullpage" :class="{ 'fullpage--none': width < 1400 }">
    <slot />
  </section>
</template>
<script>
import { debounce } from "debounce";

export default {
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
    touchStart(e) {
      e.preventDefault();

      this.touchStartY = e.touches[0].clientY;
    },
    touchMove(e) {
      if (this.inMove) return false;
      e.preventDefault();

      const currentY = e.touches[0].clientY;

      if (this.touchStartY < currentY) {
        this.moveDown();
      } else {
        this.moveUp();
      }

      this.touchStartY = 0;
      return false;
    },
  },
  created() {},
  watch: {
    inMove(val) {
      console.log(val);
    },
  },

  mounted() {
    this.calculateSectionOffsets();
    window.addEventListener("resize", this.updateWidth);
    window.addEventListener("DOMMouseScroll", this.handleMouseWheelDOM);
    window.addEventListener("touchstart", this.touchStart, { passive: false }); // mobile devices
    window.addEventListener("touchmove", this.touchMove, { passive: false }); // mobile devices
    window.addEventListener("mousewheel", this.handleMouseWheel, {
      passive: false,
    });
    this.updateWidth();
  },
  destroyed() {
    if (process.client) {
      window.removeEventListener("mousewheel", this.handleMouseWheel, {
        passive: false,
      });
      window.removeEventListener("DOMMouseScroll", this.handleMouseWheelDOM);
      window.removeEventListener("touchstart", this.touchStart); // mobile devices
      window.removeEventListener("touchmove", this.touchMove); // mobile devices
    }
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
</style>
