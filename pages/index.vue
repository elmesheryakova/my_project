<template>
  <no-ssr><SliderFullscreen :items="advantages" /></no-ssr>
</template>
<script>
export default {
  data() {
    return {
      advantages: this.$store.state.advantages,
    };
  },
};
</script>
<style lang="scss">
</style>
