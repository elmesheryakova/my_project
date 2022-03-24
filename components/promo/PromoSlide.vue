<template>

</template>

<script>
export default {
  name: "PromoSlide.vue",
  props: {
    hasCanvas: Boolean,
    title: String,
    position: String,
    hasBg: Boolean,
    list: {
      type: Array,
      required: false,
    },
    buttonTitle: {
      type: String,
      required: false,
    }
  }
}
</script>

<style lang="scss">

</style>
