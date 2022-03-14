<template>
  <section class="section" :class="{ 'fullpage--none': width < 1400 }">
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
