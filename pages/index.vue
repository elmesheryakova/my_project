<template>
  <div class="div">
    <full-page :options="options">
      <section class="section section-1">First section ...</section>
      <section class="section section-2">Second section ...</section>
      <section class="section section-3">First section ...</section>
      <section class="section section-4">Second section ...</section>
    </full-page>
  </div>
</template>
<script>
export default {
  data() {
    return {
      options: {
        activeSection: 0,
        mouseWheelSensitivity: 30,
        showIndicators: false,
      },
    };
  },
};
</script>
<style lang="scss">
.div,
.section {
  height: 100vh;
  &-1 {
    background-color: red;
  }
  &-2 {
    background-color: green;
  }
  &-3 {
    background-color: blue;
  }
}
</style>
