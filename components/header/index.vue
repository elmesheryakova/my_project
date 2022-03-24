<template>
  <header class="header" :class="{ 'header--hidden': !showHeader }">
    <HeaderTop />
    <HeaderBottom />
  </header>
</template>

<script>
export default {
  data() {
    return {
      showHeader: true,
      lastScrollPosition: 0,
    };
  },
  computed: {},
  methods: {
    onScroll() {
      const currentScrollPosition =
        window.pageYOffset || document.documentElement.scrollTop;
      if (currentScrollPosition < 0) {
        return;
      }
      if (Math.abs(currentScrollPosition - this.lastScrollPosition) < 60) {
        return;
      }
      this.showHeader = currentScrollPosition < this.lastScrollPosition;
      this.lastScrollPosition = currentScrollPosition;
    },
  },
  mounted() {
    window.addEventListener("scroll", this.onScroll);
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.onScroll);
  },
};
</script>
<style lang="scss">
.header {
  padding: 25px 0 20px;
  background-color: #fff;
  top: 0;
  left: 0;
  width: 100vw;
  z-index: 20;
  transition: transform 0.8s ease-in-out;

  @media (max-width: 860px) {
    box-shadow: 0px 1px 6px 0px #00000029;
  }
  @media (max-width: map-get($grid-breakpoints, 'md')) {
    padding: 10px 0;
  }
  &--hidden {
    transform: translateY(-300px);
    transition: transform 0.8s ease-in-out;
  }
}
</style>
