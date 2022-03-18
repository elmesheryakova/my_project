<template>
  <div class="advantages">
    <div class="container">
      <AdvantagesItem
        v-for="(item, index) in items"
        :key="index"
        :item="item"
        :width="width"
      />
    </div>
  </div>
</template>
<script>
export default {
  props: {
    width: {
      type: Number,
    },
    items: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      options: {
        css3: true,
        activeSection: 0,
        mouseWheelSensitivity: 30,
        navigation: false,
        responsiveWidth: 1300,
      },
    };
  },
};
</script>
<style lang="scss">
</style>
