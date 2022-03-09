<template>
  <div class="">
    <section class="fullpage" style="background: green">
      <h1>Section 1</h1>
    </section>
    <section class="fullpage" style="background: blue">
      <h1>Section 2</h1>
    </section>
    <section class="fullpage" style="background: red">
      <h1>Section 3</h1>
    </section>
    <section class="fullpage" style="background: orange">
      <h1>Section 4</h1>
    </section>
  </div>
</template>
<script>
export default {
  data() {
    return {
      inMove: false,
      activeSection: 0,
      offsets: [],
      touchStartY: 0,
    };
  },
  methods: {
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
        this.moveUp();
      } else if (e.wheelDelta > 30 && !this.inMove) {
        this.moveDown();
      }

      e.preventDefault();
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
  created() {
    if (process.client) {
      this.calculateSectionOffsets();
      window.addEventListener("DOMMouseScroll", this.handleMouseWheelDOM); // Mozilla Firefox
      window.addEventListener("mousewheel", this.handleMouseWheel, {
        passive: false,
      }); // Other browsers

      window.addEventListener("touchstart", this.touchStart, {
        passive: false,
      }); // mobile devices
      window.addEventListener("touchmove", this.touchMove, { passive: false }); // mobile devices
    }
  },
  destroyed() {
    if (process.client) {
      window.removeEventListener("mousewheel", this.handleMouseWheel, {
        passive: false,
      }); // Other browsers
      window.removeEventListener("DOMMouseScroll", this.handleMouseWheelDOM); // Mozilla Firefox

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
}
.sections-menu {
  position: fixed;
  right: 1rem;
  top: 50%;
  transform: translateY(-50%);
}
.sections-menu .menu-point {
  width: 10px;
  height: 10px;
  background-color: #fff;
  display: block;
  margin: 1rem 0;
  opacity: 0.6;
  transition: 0.4s ease all;
}
.sections-menu .menu-point.active {
  opacity: 1;
  transform: scale(1.5);
}
</style>
