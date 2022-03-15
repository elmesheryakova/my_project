<template>
  <section class="section">
    <slot />
  </section>
</template>
<script>
export default {
  props: {
    width: {
      type: Number,
    },
  },
};
</script>
<style lang="scss">
</style>
